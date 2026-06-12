import { and, asc, desc, SQL } from 'drizzle-orm';
import { paintings } from '../db/schema';
import { db } from '../db/db';
import { SORT_PARAM_MAP } from './types/filter-options.type';

type Options = {
  conditions: SQL[];
  offset: number;
  sortOrderAsc: boolean;
  formattedSortParam: 'date' | 'name' | 'price';
  limit?: number;
};

export const getPaintings = async ({
  conditions,
  offset,
  sortOrderAsc,
  formattedSortParam,
  limit = 8,
}: Options) => {
  return db
    .select()
    .from(paintings)
    .where(conditions.length ? and(...conditions) : undefined)
    .limit(limit)
    .offset(offset)
    .orderBy(
      sortOrderAsc
        ? asc(SORT_PARAM_MAP[formattedSortParam])
        : desc(SORT_PARAM_MAP[formattedSortParam]),
    );
};
