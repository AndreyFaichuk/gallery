import { eq } from 'drizzle-orm';
import { collections, paintings } from '../db/schema';
import { db } from '../db/db';

type Options = {
  id: string;
};

export const getCollectionById = async ({ id }: Options) => {
  const result = await db.select().from(collections).where(eq(collections.id, id)).limit(1);

  return result[0];
};
