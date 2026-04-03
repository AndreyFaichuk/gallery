'use client';

import type { FC, ReactNode } from 'react';
import { FilterPopover } from './FilterPopover';
import { ActiveFilters } from './ActiveFilters';
import useFilterParams from '@/hooks/use-filter-params';
import { Pagination } from '../Pagination';

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

const test = [
  {
    param: 'collection',
    paramLabel: 'Collections',
    value: '5c131120-73e9-4d10-bf41-c6a8a19e3e84',
    label: 'Renaissance Classics',
  },
  {
    param: 'collection',
    paramLabel: 'Collections',
    value: 'b8dd9d7d-b4de-4509-a4e6-3576444efebe',
    label: 'Emotional Landscapes',
  },
  {
    param: 'collection',
    paramLabel: 'Collections',
    value: '41b2ccf7-2148-4709-9b8b-5bd8f0776f4b',
    label: 'Urban & Contemporary',
  },
  {
    param: 'collection',
    paramLabel: 'Collections',
    value: '106c3d38-92fc-4cb0-9da7-987583ce4198',
    label: 'Abstract Expressions',
  },
  {
    param: 'collection',
    paramLabel: 'Collections',
    value: '93d24a70-1e7b-4d0d-afa6-7d59c5bdc108',
    label: 'Modern Minimalism',
  },
];

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
    </div>
  );
};
