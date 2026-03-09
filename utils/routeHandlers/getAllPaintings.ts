import { and, eq, ilike, inArray, sql, type SQL } from 'drizzle-orm';
import { collections, paintings } from '../db/schema';
import { db } from '../db/db';

type Options = {
  query?: string;
  collectionId?: string;
  isAvailable?: '1' | '0';
  page?: number;
  limit?: number;
};

const getAllPaintings = async ({ query, collectionId, isAvailable, page, limit = 8 }: Options) => {
  const conditions: SQL[] = [];

  const pageNumber = page && page > 0 ? page : 1;

  const offset = (pageNumber - 1) * limit;

  const collectionIds = collectionId ? collectionId.split(',').map((id) => id.trim()) : [];

  if (query) {
    conditions.push(ilike(paintings.name, `%${query}%`));
  }

  if (collectionIds.length) {
    conditions.push(inArray(paintings.collectionId, collectionIds));
  }

  if (isAvailable) {
    conditions.push(eq(paintings.isAvailable, isAvailable === '1'));
  }

  const [items, availabilityCounts, collectionCounts, paintingsCount] = await Promise.all([
    db
      .select()
      .from(paintings)
      .where(conditions.length ? and(...conditions) : undefined)
      .limit(limit)
      .offset(offset),

    db
      .select({
        isAvailable: paintings.isAvailable,
        count: sql<number>`count(*)`,
      })
      .from(paintings)
      .groupBy(paintings.isAvailable),

    db
      .select({
        id: collections.id,
        name: collections.name,
        count: sql<number>`count(${paintings.id})`,
      })
      .from(collections)
      .leftJoin(paintings, eq(paintings.collectionId, collections.id))
      .groupBy(collections.id),

    db
      .select({
        count: sql<number>`count(${paintings.id})`,
      })
      .from(paintings)
      .where(conditions.length ? and(...conditions) : undefined),
  ]);

  const totalCount = paintingsCount[0]?.count ?? 0;

  return {
    items,
    totalCount,
    filters: [
      {
        name: 'Availability',
        param: 'availability',
        options: [
          {
            label: 'In stock',
            value: '1',
            count: availabilityCounts.find((a) => a.isAvailable)?.count ?? 0,
          },
          {
            label: 'Out of stock',
            value: '0',
            count: availabilityCounts.find((a) => !a.isAvailable)?.count ?? 0,
          },
        ],
      },
      {
        name: 'Collections',
        param: 'collection',
        options: collectionCounts.map((c) => ({
          label: c.name,
          value: c.id,
          count: c.count,
        })),
      },
    ],
  };
};

export default getAllPaintings;
