'use client';

import type { FC, ReactNode } from 'react';
import { FilterPopover } from './FilterPopover';
import { ActiveFilters } from './ActiveFilters';
import useFilterParams from '@/hooks/use-filter-params';
import { Pagination } from '../Pagination';
import * as Sentry from '@sentry/nextjs';
import { Button } from '../ui/button';

export type Option = {
  label: string;
  value: string;
  count: number;
  shoudAddDivider?: boolean;
};

export type FilterOptions = { param: string; name: string; options: Option[] }[];

export type PaintingsFilterBarProps = {
  filters: FilterOptions;
  totalCount: number;
  children: ReactNode;
};

const LIMIT = 8;

export const PaintingsFilterBar: FC<PaintingsFilterBarProps> = ({
  filters,
  children,
  totalCount,
}) => {
  const {
    currentParamsMap,
    handleToggleSearchParam,
    handleRemoveAllSearchParams,
    handleSetPage,
    handleSetSortParam,
    sortParam,
    page,
  } = useFilterParams({
    params: filters.map((filter) => filter.param),
  });

  const filtersToRender = Object.entries(currentParamsMap).flatMap(([param, value]) => {
    const currentFilterBlock = filters.find((filter) => filter.param === param);

    return value.map((nestedValue) => {
      const currentFilter = currentFilterBlock?.options.find(
        (option) => option.value === nestedValue,
      );

      return {
        param,
        paramLabel: currentFilterBlock?.name ?? '',
        value: nestedValue,
        label: currentFilter?.label ?? '',
      };
    });
  });

  const totalPages = Math.ceil(totalCount / LIMIT);

  const captureClientError = () => {
    Sentry.captureException(new Error('Sentry manual client capture test'));
  };

  return (
    <div className="flex flex-col gap-12">
      <div className="w-full flex flex-col gap-4">
        <FilterPopover
          filters={filters}
          currentParamsMap={currentParamsMap}
          handleSetSortParam={handleSetSortParam}
          handleToggleSearchParam={handleToggleSearchParam}
          totalCount={totalCount}
          sortParam={sortParam}
        />
        <ActiveFilters
          currentParamsMap={filtersToRender}
          handleToggleSearchParam={handleToggleSearchParam}
          handleRemoveAllSearchParams={handleRemoveAllSearchParams}
        />
      </div>
      {children}
      {totalPages > 1 && (
        <Pagination currentPage={page} setPage={handleSetPage} totalPages={totalPages} />
      )}

      <Button onClick={captureClientError}>Capture Client Error Manually</Button>
    </div>
  );
};
