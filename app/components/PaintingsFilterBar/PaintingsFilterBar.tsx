'use client';

import { type FC, type ReactNode } from 'react';
import { Pagination } from '../Pagination';
import { usePaintingsFilterBar } from '@/hooks/use-paintings-filter-bar';
import { FilterBarMobile } from './mobile/FilterBarMobile';
import { FilterOptions } from '@/types';
import PaintingFiltersDesktop from './desktop/PaintingFiltersDesktop';
import { Separator } from '../ui';

export type PaintingsFilterBarProps = {
  filters: FilterOptions;
  totalCount: number;
  children: ReactNode;
};

export const PaintingsFilterBar: FC<PaintingsFilterBarProps> = ({
  filters,
  children,
  totalCount,
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
    <div className="flex flex-col gap-12 mt-16">
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
      {totalPages > 1 && (
        <Pagination currentPage={page} setPage={handleSetPage} totalPages={totalPages} />
      )}
    </div>
  );
};
