import { db } from '@/utils/db/db';
import { collections, paintings } from '@/utils/db/schema';
import { and, eq, SQL, sql } from 'drizzle-orm';

type Options = {
  conditions: SQL[];
};

export const getCollectionCounts = async ({ conditions }: Options) => {
  return db
    .select({
      id: collections.id,
      name: collections.name,
      count: sql<number>`count(${paintings.id})`,
    })
    .from(collections)
    .leftJoin(paintings, eq(paintings.collectionId, collections.id))
    .where(conditions.length ? and(...conditions) : undefined)
    .groupBy(collections.id);
};
