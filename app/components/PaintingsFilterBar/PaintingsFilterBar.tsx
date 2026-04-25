'use client';

import { useEffect, useState, type FC, type ReactNode } from 'react';
import { Pagination } from '../Pagination';
import { usePaintingsFilterBar } from '@/hooks/use-paintings-filter-bar';
import { PaintingFiltersDesktop } from './desktop/PaintingFiltersDesktop';
import { FilterBarMobile } from './mobile/FilterBarMobile';
import { BaseFilterOptionNamesT, FilterOptionParamsT } from '@/types';

export type Option = {
  label: string;
  value: string;
  count: number;
  shoudAddDivider?: boolean;
};

export type FilterOptions = {
  param: FilterOptionParamsT;
  name: BaseFilterOptionNamesT;
  options: Option[];
}[];

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
  const [isHydrated, setHydrated] = useState(false);

  useEffect(() => {
    setHydrated(true);
  }, []);

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
  } = usePaintingsFilterBar(filters, totalCount);

  const getLayout = () => {
    if (!isHydrated) return null;

    return isBelowMobile ? (
      <FilterBarMobile
        filters={filters}
        currentParamsMap={currentParamsMap}
        handleSetSortParam={handleSetSortParam}
        handleToggleSearchParam={handleToggleSearchParam}
        totalCount={totalCount}
        sortParam={sortParam}
      />
    ) : (
      <PaintingFiltersDesktop
        filters={filters}
        currentParamsMap={currentParamsMap}
        handleSetSortParam={handleSetSortParam}
        handleToggleSearchParam={handleToggleSearchParam}
        totalCount={totalCount}
        sortParam={sortParam}
        filtersToRender={filtersToRender}
        handleRemoveAllSearchParams={handleRemoveAllSearchParams}
      />
    );
  };

  return (
    <div className="flex flex-col gap-12">
      <div className="w-full flex flex-col gap-4">{getLayout()}</div>
      {children}
      {totalPages > 1 && (
        <Pagination currentPage={page} setPage={handleSetPage} totalPages={totalPages} />
      )}
    </div>
  );
};
