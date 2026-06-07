import { paintings } from '@/utils/db/schema';

export const SORT_PARAM_MAP = {
  name: paintings.name,
  price: paintings.price,
  date: paintings.createdAt,
} as const;

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
};
