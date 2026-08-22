import { db } from '@/services/database/db';
import { paintings } from '@/services/database/schema';
import { and, eq, SQL, sql } from 'drizzle-orm';

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
    .where(and(eq(paintings.isExclusive, false), ...conditions))
    .groupBy(paintings.isAvailable);
};
