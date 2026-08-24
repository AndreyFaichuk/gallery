import { db } from '@/services/database/db';
import { paintings } from '@/services/database/schema';
import { and, type SQL, sql } from 'drizzle-orm';

type Options = {
  conditions: SQL[];
};

export const getPaintingsCounts = async ({ conditions }: Options) => {
  return db
    .select({
      count: sql<number>`count(${paintings.id})`,
    })
    .from(paintings)
    .where(conditions.length ? and(...conditions) : undefined);
};
