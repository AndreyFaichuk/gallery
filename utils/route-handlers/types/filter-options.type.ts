import { paintings } from '@/utils/db/schema';

export const SORT_PARAM_MAP = {
  name: paintings.name,
  price: paintings.price,
  date: paintings.createdAt,
} as const;

export const ALL_PAINTINGS_API_MODE = {
  PAGINATION: 'pagination',
  LOAD_MORE: 'load-more',
} as const;

export type PaginationStrategyVariantT =
  (typeof ALL_PAINTINGS_API_MODE)[keyof typeof ALL_PAINTINGS_API_MODE];

type SortField = keyof typeof SORT_PARAM_MAP;

export type SortParam = SortField | `-${SortField}`;

export type FilterOptionsT = {
  query?: string;
  collectionId?: string;
  isAvailable?: '1' | '0';
  page?: number;
  limit?: number;
  isExclusive?: '1' | '0';
  sort?: SortParam;
  mode?: PaginationStrategyVariantT;
};
