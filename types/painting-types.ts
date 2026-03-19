import type { SortParam } from '@/utils/routeHandlers/getAllPaintings';

export type PaintingsSearchParamsProps = {
  searchParams: Promise<{
    query?: string;
    collection?: string;
    availability?: '1' | '0';
    page?: string;
    sort?: SortParam;
  }>;
};

export const PAINTING_ITEM_VARIANT = {
  CATALOG: 'catalog',
  SEARCH: 'search',
} as const;

export type PaintingItemVariantT =
  (typeof PAINTING_ITEM_VARIANT)[keyof typeof PAINTING_ITEM_VARIANT];
