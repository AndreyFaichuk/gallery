import { sql } from 'drizzle-orm';
import { db } from '../db/db';
import { collections } from '../db/schema';

export const getAllCollections = async () => {
  try {
    return db.execute(sql`SELECT * FROM collections`);
  } catch (err) {
    console.error(err);
    throw err;
  }
};
