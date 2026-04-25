'use client';

import { FC, useState } from 'react';
import { FilterDrawer } from './FilterDrawer';
import { FilterBarDesktopProps } from '../desktop/FilterBarDesktop';
import { Button } from '../../ui/button';
import { ChevronDown } from 'lucide-react';
import { Nullable } from '@/types';

export type FilterBarT = FilterBarDesktopProps['filters'][number];
export type FilterBarParamMapT = FilterBarDesktopProps['currentParamsMap'];

export type DrawerFilterSnaphotT = {
  name: FilterBarT['name'];
  currentFilters: {
    value: string;
    label: string;
    isSelected: boolean;
  }[];
};

const buildFilterSnapshot = (
  activeFilter: Nullable<FilterBarT>,
  currentParamMap: FilterBarParamMapT,
) => {
  if (!activeFilter) return null;

  return {
    name: activeFilter.name,
    currentFilters: activeFilter.options.map((option) => ({
      value: option.value,
      label: option.count ? `${option.label} (${option.count})` : option.label,
      isSelected: currentParamMap[activeFilter.param].includes(option.value),
    })),
  };
};

export const FilterBarMobile: FC<FilterBarDesktopProps> = ({
  currentParamsMap,
  filters,
  handleSetSortParam,
  handleToggleSearchParam,
  sortParam,
  totalCount,
}) => {
  const [filtersSnapshot, setFiltersSnapshot] = useState<Nullable<DrawerFilterSnaphotT>>(null);

  console.log(filtersSnapshot, 'filtersSnapshot');

  const handleDrawerOpen = (filter: FilterBarT) => {
    setFiltersSnapshot(buildFilterSnapshot(filter, currentParamsMap));
  };

  const handleFilterSnapshotChange = (value: string) => {
    setFiltersSnapshot((prevFiltersSnapshot) => {
      if (!prevFiltersSnapshot) return null;

      return {
        ...prevFiltersSnapshot,
        currentFilters: prevFiltersSnapshot.currentFilters.map((filter) => ({
          ...filter,
          isSelected: value === filter.value ? !filter.isSelected : filter.isSelected,
        })),
      };
    });
  };

  return (
    <>
      <div className="flex gap-2 flex-wrap">
        <div className="flex flex-col gap-2 w-full">
          <div className="w-full flex justify-end">
            <span className="text-sm">{`${totalCount} paintings`}</span>
          </div>

          <div className="flex gap-2 flex-wrap">
            {filters.map((filter) => (
              <Button
                key={filter.name}
                onClick={() => handleDrawerOpen(filter)}
                variant="outline"
                size="lg"
                className="gap-2 border-1 border-gray-200 bg-gray-100 text-gray-600"
              >
                {filter.name} <ChevronDown className="text-gray-500" />
              </Button>
            ))}

            {/* <Button
          variant="outline"
          size="lg"
          className="gap-2 border-1 border-gray-200 bg-gray-100 text-gray-600"
          onClick={() => handleDrawerOpen('Sort by' as FilterBarMobileNamesT)}
          >
          Sort by <ChevronDown className="text-gray-500" />
          </Button> */}
          </div>
        </div>
      </div>
      <FilterDrawer
        activeFilter={filtersSnapshot}
        setActiveFilter={setFiltersSnapshot}
        handleFilterSnapshotChange={handleFilterSnapshotChange}
      />
    </>
  );
};
