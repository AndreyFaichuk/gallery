import type { SortParam } from '@/utils/routeHandlers/getAllPaintings';

type QueryParamsBase<T> = {
  searchParams: Promise<T>;
};

type ParamsBase<T> = {
  params: Promise<T>;
};

export type PaintingPageParams = ParamsBase<{ id: string }>;

export type PaintingsSearchParamsProps = QueryParamsBase<{
  query?: string;
  collections?: string;
  availability?: '1' | '0';
  page?: string;
  sort?: SortParam;
}>;

export const PAINTING_ITEM_VARIANT = {
  CATALOG: 'catalog',
  SEARCH: 'search',
  ALSO_LIKE: 'alsoLike',
} as const;

export type PaintingItemVariantT =
  (typeof PAINTING_ITEM_VARIANT)[keyof typeof PAINTING_ITEM_VARIANT];

export type ExchangeT = {
  exchange: {
    EUR: number;
    UAH: number;
    USD: number;
  };
};
