import { db } from '../database';
import { collections } from '../database';

export const getAllCollections = () => {
  return db.select().from(collections);
};
