import { eq, sql } from 'drizzle-orm';
import { db } from '@/services/database/db';
import { collections, paintings } from '@/services/database/schema';

export const getCollectionCounts = async () => {
  return db
    .select({
      id: collections.id,
      name: collections.name,
      count: sql<number>`count(${paintings.id})`,
    })
    .from(collections)
    .leftJoin(paintings, eq(paintings.collectionId, collections.id))
    .where(eq(paintings.isExclusive, false))
    .groupBy(collections.id);
};
