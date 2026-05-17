'use client';

import { type FC, type ReactNode } from 'react';
import { Pagination } from '../Pagination';
import { usePaintingsFilterBar } from '@/hooks/use-paintings-filter-bar';
import { FilterBarMobile } from './mobile/FilterBarMobile';
import dynamic from 'next/dynamic';
import { FilterOptions } from '@/types';

export type PaintingsFilterBarProps = {
  filters: FilterOptions;
  totalCount: number;
  children: ReactNode;
};

const PaintingFiltersDesktopAsync = dynamic(() => import('./desktop/PaintingFiltersDesktop'), {
  ssr: false,
  // TODO: add skeleton / loader
  // loading: () => <p>Loading...</p>,
});

export const PaintingsFilterBar: FC<PaintingsFilterBarProps> = ({
  filters,
  children,
  totalCount,
}) => {
  const {
    isBelowMobile,
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

  const getLayout = () => {
    return isBelowMobile ? (
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
    ) : (
      <div className="hidden xs:block">
        <PaintingFiltersDesktopAsync
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
    );
  };

  return (
    <div className="flex flex-col gap-12">
      <div className="w-full flex flex-col gap-4">{filters.length > 0 && getLayout()}</div>
      {children}
      {totalPages > 1 && (
        <Pagination currentPage={page} setPage={handleSetPage} totalPages={totalPages} />
      )}
    </div>
  );
};
