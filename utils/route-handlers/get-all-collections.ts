import { sql } from 'drizzle-orm';
import { db } from '../db/db';
import { collections } from '../db/schema';

export const getAllCollections = async () => {
  try {
    const result = await db.execute(sql`SELECT * FROM collections`);
    console.log(result);
    return [];
  } catch (err) {
    console.error(err);
    throw err;
  }
};
