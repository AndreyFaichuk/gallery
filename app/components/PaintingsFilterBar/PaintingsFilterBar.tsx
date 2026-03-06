'use client';

import type { FC } from 'react';
import { FilterPopover } from './FilterPopover';
import { ActiveFilters } from './ActiveFilters';
import useFilterParams from '@/hooks/use-filter-params';

export type Option = {
  label: string;
  value: string;
  count: number;
  shoudAddDivider?: boolean;
};

export type FilterOptions = { param: string; name: string; options: Option[] }[];

export type PaintingsFilterBarProps = {
  filters: FilterOptions;
};

export const PaintingsFilterBar: FC<PaintingsFilterBarProps> = ({ filters }) => {
  const { currentParamsMap, handleToggleSearchParam, handleRemoveAllSearchParams } =
    useFilterParams({
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

  return (
    <div className="w-full flex flex-col gap-4">
      <FilterPopover
        filters={filters}
        currentParamsMap={currentParamsMap}
        handleToggleSearchParam={handleToggleSearchParam}
      />
      <ActiveFilters
        currentParamsMap={filtersToRender}
        handleToggleSearchParam={handleToggleSearchParam}
        handleRemoveAllSearchParams={handleRemoveAllSearchParams}
      />
    </div>
  );
};
