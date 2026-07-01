import { db } from '../db/db';
import { collections } from '../db/schema';

export const getAllCollections = () => {
  return db.select().from(collections);
};
