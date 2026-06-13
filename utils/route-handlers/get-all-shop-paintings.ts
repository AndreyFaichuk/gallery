import { getCurrencyExchange } from './get-currency-exchange';
import { FILTER_BAR_MOBILE_OPTIONS } from '@/constants';
import { getPaintings } from './get-paintings';
import { getAvailabilityCounts, getCollectionCounts } from './counts';
import { getPaintingsCounts } from './counts/get-paintings-counts';
import { getPaintingsFilterConditions } from './shared/get-paintings-filter-conditions';
import { ALL_PAINTINGS_API_MODE, FilterOptionsT } from './types/filter-options.type';

export const getAllShopPaintings = async ({
  query,
  collectionId,
  isAvailable,
  page,
  sort = 'name',
  limit = 8,
  mode = ALL_PAINTINGS_API_MODE.PAGINATION,
}: FilterOptionsT) => {
  const pageNumber = page && page > 0 ? page : 1;

  const offset = mode === ALL_PAINTINGS_API_MODE.LOAD_MORE ? 0 : (pageNumber - 1) * limit;

  const finalLimit = mode === ALL_PAINTINGS_API_MODE.LOAD_MORE ? pageNumber * limit : limit;

  const { conditions, formattedSortParam, sortOrderAsc } = getPaintingsFilterConditions({
    collectionId,
    isAvailable,
    query,
    sort,
  });

  const [items, availabilityCounts, collectionCounts, paintingsCount, currentExhange] =
    await Promise.all([
      getPaintings({
        conditions,
        formattedSortParam,
        offset,
        sortOrderAsc,
        limit: finalLimit,
      }),

      getAvailabilityCounts(),

      getCollectionCounts(),

      getPaintingsCounts({ conditions }),

      getCurrencyExchange(),
    ]);

  const totalCount = paintingsCount[0]?.count ?? 0;

  return {
    items,
    totalCount,
    filters: [
      {
        name: FILTER_BAR_MOBILE_OPTIONS.availability.name,
        param: FILTER_BAR_MOBILE_OPTIONS.availability.param,
        options: [
          {
            label: 'In stock',
            value: '1',
            count: availabilityCounts.find((a) => a.isAvailable)?.count ?? 0,
          },
          {
            label: 'Out of stock',
            value: '0',
            count: availabilityCounts.find((a) => !a.isAvailable)?.count ?? 0,
          },
        ],
      },
      {
        name: FILTER_BAR_MOBILE_OPTIONS.collections.name,
        param: FILTER_BAR_MOBILE_OPTIONS.collections.param,
        options: collectionCounts.map((c) => ({
          label: c.name,
          value: c.id,
          count: c.count,
        })),
      },
    ],
    exchange: currentExhange,
  };
};
