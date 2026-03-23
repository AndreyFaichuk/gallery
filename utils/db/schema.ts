import {
  pgTable,
  text,
  numeric,
  jsonb,
  uuid,
  uniqueIndex,
  boolean,
  index,
  timestamp,
  pgEnum,
} from 'drizzle-orm/pg-core';
import { sql } from 'drizzle-orm/sql/sql';
import { DateTime } from 'luxon';

export const paintings = pgTable(
  'paintings',
  {
    id: uuid('id')
      .default(sql`gen_random_uuid()`)
      .primaryKey(),
    name: text('name').notNull(),
    description: text('description'),
    price: numeric('price').notNull(),
    width: numeric('width_cm', { mode: 'number' }).notNull().default(1),
    height: numeric('height_cm', { mode: 'number' }).notNull().default(1),
    imageUrls: jsonb('image_urls').$type<string[]>().notNull().default([]),
    videoUrls: jsonb('video_urls').$type<string[]>().notNull().default([]),
    isAvailable: boolean('is_available').notNull().default(true),
    year: numeric('year', { mode: 'number' }).notNull().default(DateTime.now().year),
    specifications: text('specifications'),
    collectionId: uuid('collection_id').references(() => collections.id, { onDelete: 'cascade' }),
    createdAt: timestamp().defaultNow(),
  },
  (table) => {
    return {
      collectionIdx: index('paintings_collection_idx').on(table.collectionId),
    };
  },
);

export const searchTerms = pgTable(
  'search_terms',
  {
    id: uuid('id')
      .default(sql`gen_random_uuid()`)
      .primaryKey(),
    term: text('term').notNull(),
    paintingId: uuid('painting_id')
      .notNull()
      .references(() => paintings.id, { onDelete: 'cascade' }),
    createdAt: timestamp().defaultNow(),
  },
  (table) => ({
    uniqueTermPerPainting: uniqueIndex('term_painting_unique').on(table.term, table.paintingId),
  }),
);

export const collections = pgTable('collections', {
  id: uuid('id')
    .default(sql`gen_random_uuid()`)
    .primaryKey(),
  name: text('name').notNull(),
  description: text('description'),
  createdAt: timestamp().defaultNow(),
});

export const exchangeRatesBaseCurrencyEnum = pgEnum('base_currency', ['EUR', 'USD', 'UAH']);

export const exchangeRates = pgTable('exchange_rates', {
  id: uuid('id').primaryKey(),

  baseCurrency: exchangeRatesBaseCurrencyEnum('base_currency').notNull().default('USD'),

  USD: numeric('rate_usd', { mode: 'number' }).notNull(),
  EUR: numeric('rate_eur', { mode: 'number' }).notNull(),
  UAH: numeric('rate_uah', { mode: 'number' }).notNull(),

  fetchedAt: timestamp('fetched_at').notNull(),
});
