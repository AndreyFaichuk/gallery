import { getAllShopPaintings } from './get-all-shop-paintings';
import { getExclusivePaintings } from './get-exclusive-paintings';
import type { FilterOptionsT } from './types';

export const getAllGalleryPaintings = async ({
  query,
  collectionId,
  isAvailable,
  page,
  sort = 'name',
  limit = 8,
  mode,
}: FilterOptionsT) => {
  const [{ exchange, filters, items, totalCount }, exclusiveItems] = await Promise.all([
    getAllShopPaintings({
      collectionId,
      isAvailable,
      page: page ? Number(page) : undefined,
      query,
      sort,
      limit,
      mode,
    }),

    getExclusivePaintings(),
  ]);

  return {
    exclusiveItems,
    allItems: items,
    totalCount,
    filters,
    exchange,
  };
};
