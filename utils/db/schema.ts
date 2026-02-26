import { pgTable, serial, text, numeric, jsonb, uuid } from 'drizzle-orm/pg-core';
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
