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
} from 'drizzle-orm/pg-core';
import { sql } from 'drizzle-orm/sql/sql';

export const paintings = pgTable(
  'paintings',
  {
    id: uuid('id')
      .default(sql`gen_random_uuid()`)
      .primaryKey(),
    name: text('name').notNull(),
    description: text('description'),
    dimensions: text('dimensions'),
    price: numeric('price').notNull(),
    images: jsonb().$type<string[]>().notNull(),
    isAvailable: boolean('is_available').notNull().default(true),
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
