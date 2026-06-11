import { db } from '@/utils/db/db';
import { paintings } from '@/utils/db/schema';
import { eq, sql } from 'drizzle-orm';

export const getAvailabilityCounts = async () => {
  return db
    .select({
      isAvailable: paintings.isAvailable,
      count: sql<number>`count(*)`,
    })
    .from(paintings)
    .where(eq(paintings.isExclusive, false))
    .groupBy(paintings.isAvailable);
};
