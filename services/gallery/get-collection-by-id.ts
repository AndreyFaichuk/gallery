import { eq } from 'drizzle-orm';
import { collections, db } from '../database';

type Options = {
  id: string;
};

export const getCollectionById = async ({ id }: Options) => {
  const result = await db.select().from(collections).where(eq(collections.id, id)).limit(1);

  return result[0];
};
