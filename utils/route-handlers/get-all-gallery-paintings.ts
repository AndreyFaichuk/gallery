import { FilterOptionsT } from './types/filter-options.type';
import { getExclusivePaintings } from './get-exclusive-paintings';
import { getAllShopPaintings } from './get-all-shop-paintings';

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
