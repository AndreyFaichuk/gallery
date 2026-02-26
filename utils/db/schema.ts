import { pgTable, serial, text, numeric, jsonb, uuid, uniqueIndex } from 'drizzle-orm/pg-core';
import { sql } from 'drizzle-orm/sql/sql';

export const paintings = pgTable('paintings', {
  id: uuid('id')
    .default(sql`gen_random_uuid()`)
    .primaryKey(),
  name: text('name').notNull(),
  description: text('description'),
  dimensions: text('dimensions'),
  price: numeric('price').notNull(),
  images: jsonb().$type<string[]>().notNull(),
});

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
  },
  (t) => ({
    uniqueTermPerPainting: uniqueIndex('term_painting_unique').on(t.term, t.paintingId),
  }),
);
