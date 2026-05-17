'use client';

import React, { type FC } from 'react';
import { Popover, PopoverContent, PopoverTrigger } from '../../ui/popover';
import { ChevronDown } from 'lucide-react';
import type { FilterBarDesktopProps } from '@/types';
import { FILTER_BAR_MOBILE_SORT_OPTION, SORT_OPTIONS } from '@/constants';
import { Button, Separator } from '../../ui';
import { FilterItem } from '../../ui/filter-item';
import { useFilterManage } from '@/hooks';

export const FilterBarDesktop: FC<FilterBarDesktopProps> = ({
  filters,
  handleSetSortParam,
  currentParamsMap,
  totalCount,
  sortParam,
  handleToggleSearchParamsBulk,
  handleRemoveAllSearchParams,
}) => {
  const {
    filtersSnapshot,
    handleFilterOpen,
    handleSortOpen,
    handleFilterSnapshotChange,
    handleFilterSnapshotApply,
    setFiltersSnapshot,
  } = useFilterManage({
    currentParamsMap,
    sortParam,
    handleSetSortParam,
    handleToggleSearchParamsBulk,
  });

  const currentSortOption =
    SORT_OPTIONS.find((option) => option.value === sortParam) ?? SORT_OPTIONS[0];

  return (
    <div className="flex items-center justify-between">
      <div className="flex gap-6 flex-wrap">
        {filters.map((filter) => (
          <Popover
            key={filter.name}
            open={filtersSnapshot?.name === filter.name}
            onOpenChange={(open) => {
              if (!open) setFiltersSnapshot(null);
            }}
          >
            <PopoverTrigger asChild>
              <Button
                variant="outline"
                size="lg"
                className="gap-2 border-1 border-gray-200 bg-gray-100 text-gray-600"
                onClick={() => handleFilterOpen(filter)}
              >
                {filter.name} <ChevronDown className="text-gray-500" />
              </Button>
            </PopoverTrigger>

            <PopoverContent side="bottom" align="start" alignOffset={0} sideOffset={10}>
              <div className="flex flex-col gap-2">
                <span className="text-foreground font-medium">{filter.name}</span>
                <Separator />
                {filtersSnapshot?.currentFilters.map((filter, index) => {
                  const isLastBlock = index === filtersSnapshot?.currentFilters.length - 1;

                  return (
                    <React.Fragment key={filter.label}>
                      <FilterItem filter={filter} onFilterChange={handleFilterSnapshotChange} />
                      <Separator />
                    </React.Fragment>
                  );
                })}
                <div className="flex w-full justify-around mt-4">
                  <Button
                    className="w-1/3"
                    variant="ghost"
                    onClick={() => {
                      handleRemoveAllSearchParams();
                      setFiltersSnapshot(null);
                    }}
                  >
                    Reset
                  </Button>
                  <Button className="w-1/3" onClick={handleFilterSnapshotApply}>
                    Apply
                  </Button>
                </div>
              </div>
            </PopoverContent>
          </Popover>
        ))}
      </div>
      <div className="flex items-center gap-6">
        <Popover
          open={filtersSnapshot?.name === FILTER_BAR_MOBILE_SORT_OPTION.sort.name}
          onOpenChange={(open) => {
            if (!open) setFiltersSnapshot(null);
          }}
        >
          <PopoverTrigger asChild>
            <div className="flex gap-2 justify-center items-center">
              <span>Sort by</span>
              <Button
                variant="outline"
                size="lg"
                className="gap-2 border-1 border-gray-200 bg-gray-100 text-gray-600"
                onClick={() => handleSortOpen(FILTER_BAR_MOBILE_SORT_OPTION.sort.param)}
              >
                {currentSortOption.label} <ChevronDown className="text-gray-500" />
              </Button>
            </div>
          </PopoverTrigger>

          <PopoverContent side="bottom" align="start" alignOffset={0} sideOffset={10}>
            {filtersSnapshot?.currentFilters.map((filter, index) => {
              const isLastBlock = index === filtersSnapshot?.currentFilters.length - 1;

              return (
                <React.Fragment key={filter.label}>
                  <FilterItem filter={filter} onFilterChange={handleFilterSnapshotChange} />
                  {!isLastBlock && <Separator />}
                </React.Fragment>
              );
            })}
            <div className="flex w-full justify-around mt-4">
              <Button className="w-2/3" onClick={handleFilterSnapshotApply}>
                Apply
              </Button>
            </div>
          </PopoverContent>
        </Popover>

        {`${totalCount} paintings`}
      </div>
    </div>
  );
};
