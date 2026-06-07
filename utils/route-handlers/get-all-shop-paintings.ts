import { getCurrencyExchange } from './get-currency-exchange';
import { FILTER_BAR_MOBILE_OPTIONS } from '@/constants';
import { getPaintings } from './get-paintings';
import { getAvailabilityCounts, getCollectionCounts } from './counts';
import { getPaintingsCounts } from './counts/get-paintings-counts';
import { getPaintingsFilterConditions } from './shared/get-paintings-filter-conditions';
import { FilterOptionsT } from './types/filter-options.type';

export const getAllShopPaintings = async ({
  query,
  collectionId,
  isAvailable,
  page,
  sort = 'name',
  limit = 8,
  isExclusive = '0',
}: FilterOptionsT) => {
  const { conditions, formattedSortParam, offset, sortOrderAsc } = getPaintingsFilterConditions({
    collectionId,
    isAvailable,
    query,
    page,
    sort,
    limit,
    isExclusive,
  });

  const [items, availabilityCounts, collectionCounts, paintingsCount, currentExhange] =
    await Promise.all([
      getPaintings({
        conditions,
        formattedSortParam,
        offset,
        sortOrderAsc,
        limit,
      }),

      getAvailabilityCounts({ conditions }),

      getCollectionCounts({ conditions }),

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
