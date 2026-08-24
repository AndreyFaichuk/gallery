import { collections, db } from '../database';

export const getAllCollections = () => {
  return db.select().from(collections);
};
