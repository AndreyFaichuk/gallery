'use client';

import { type FC, type ReactNode } from 'react';
import { usePaintingsFilterBar } from '@/hooks/use-paintings-filter-bar';
import { FilterBarMobile } from './mobile/FilterBarMobile';
import { FilterOptions } from '@/types';
import PaintingFiltersDesktop from './desktop/PaintingFiltersDesktop';
import { PaginationStrategy } from '../layout/Header/mobile/components/PaginationStrategy';
import {
  ALL_PAINTINGS_API_MODE,
  PaginationStrategyVariantT,
} from '@/utils/route-handlers/types/filter-options.type';

export type PaintingsFilterBarProps = {
  filters: FilterOptions;
  totalCount: number;
  variant?: PaginationStrategyVariantT;
  children: ReactNode;
};

export const PaintingsFilterBar: FC<PaintingsFilterBarProps> = ({
  filters,
  children,
  totalCount,
  variant = ALL_PAINTINGS_API_MODE.PAGINATION,
}) => {
  const {
    currentParamsMap,
    sortParam,
    filtersToRender,
    page,
    totalPages,
    handleSetSortParam,
    handleToggleSearchParam,
    handleRemoveAllSearchParams,
    handleSetPage,
    handleToggleSearchParamsBulk,
  } = usePaintingsFilterBar(filters, totalCount);

  return (
    <div className="flex flex-col gap-6">
      <div className="w-full flex flex-col gap-4">
        {filters.length > 0 && (
          <>
            <div className="xs:hidden">
              <FilterBarMobile
                filters={filters}
                currentParamsMap={currentParamsMap}
                handleSetSortParam={handleSetSortParam}
                handleToggleSearchParamsBulk={handleToggleSearchParamsBulk}
                handleRemoveAllSearchParams={handleRemoveAllSearchParams}
                totalCount={totalCount}
                sortParam={sortParam}
              />
            </div>

            <div className="hidden xs:block">
              <PaintingFiltersDesktop
                filters={filters}
                currentParamsMap={currentParamsMap}
                handleSetSortParam={handleSetSortParam}
                handleToggleSearchParam={handleToggleSearchParam}
                totalCount={totalCount}
                sortParam={sortParam}
                filtersToRender={filtersToRender}
                handleRemoveAllSearchParams={handleRemoveAllSearchParams}
                handleToggleSearchParamsBulk={handleToggleSearchParamsBulk}
              />
            </div>
          </>
        )}
      </div>

      {children}

      <PaginationStrategy
        currentPage={page}
        setPage={handleSetPage}
        totalPages={totalPages}
        variant={variant}
      />
    </div>
  );
};
