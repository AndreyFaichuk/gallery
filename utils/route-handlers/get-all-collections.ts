import { db } from '../db/db';
import { collections } from '../db/schema';

export const getAllCollections = async () => {
  try {
    return await db.select().from(collections);
  } catch (err) {
    console.error(err);
    throw err;
  }
};
