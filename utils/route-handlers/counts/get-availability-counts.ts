import { db } from '@/utils/db/db';
import { paintings } from '@/utils/db/schema';
import { and, SQL, sql } from 'drizzle-orm';

type Options = {
  conditions: SQL[];
};

export const getAvailabilityCounts = async ({ conditions }: Options) => {
  return db
    .select({
      isAvailable: paintings.isAvailable,
      count: sql<number>`count(*)`,
    })
    .from(paintings)
    .where(conditions.length ? and(...conditions) : undefined)
    .groupBy(paintings.isAvailable);
};
