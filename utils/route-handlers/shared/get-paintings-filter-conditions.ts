import { paintings } from '@/utils/db/schema';
import { eq, ilike, inArray, SQL } from 'drizzle-orm';
import { FilterOptionsT } from '../types/filter-options.type';

const SORT_PARAM_MAP = {
  name: paintings.name,
  price: paintings.price,
  date: paintings.createdAt,
} as const;

type SortField = keyof typeof SORT_PARAM_MAP;

export type SortParam = SortField | `-${SortField}`;

type Options = Omit<FilterOptionsT, 'page' | 'limit' | 'mode'>;

export const getPaintingsFilterConditions = ({
  query,
  collectionId,
  isAvailable,
  sort = 'name',
  isExclusive = '0',
}: Options) => {
  const conditions: SQL[] = [];

  const sortOrderAsc = !sort?.startsWith('-');

  const formattedSortParam = (sort?.replace('-', '') ?? 'name') as SortField;

  const collectionIds = collectionId ? collectionId.split(',').map((id) => id.trim()) : [];

  if (query) {
    conditions.push(ilike(paintings.name, `%${query}%`));
  }

  if (collectionIds.length) {
    conditions.push(inArray(paintings.collectionId, collectionIds));
  }

  if (isAvailable) {
    const values = isAvailable.split(',');

    if (values.length === 1) {
      conditions.push(eq(paintings.isAvailable, values[0] === '1'));
    }
  }

  if (isExclusive === '0') {
    conditions.push(eq(paintings.isExclusive, false));
  }

  return {
    conditions,
    sortOrderAsc,
    formattedSortParam,
  };
};
