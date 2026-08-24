'use client';

import type { FC, ReactNode } from 'react';
import { usePaintingsFilterBar } from '@/hooks/use-paintings-filter-bar';
import { ALL_PAINTINGS_API_MODE, type PaginationStrategyVariantT } from '@/services/gallery/types';
import type { FilterOptions } from '@/types';
import { PaginationStrategy } from '../layout/Header/Mobile/components/PaginationStrategy';
import PaintingFiltersDesktop from './Desktop';
import { FilterBarMobile } from './Mobile';

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
