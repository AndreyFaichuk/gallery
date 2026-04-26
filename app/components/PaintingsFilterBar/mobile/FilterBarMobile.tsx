'use client';

import { FC, useState } from 'react';
import { FilterDrawer } from './FilterDrawer';
import { FilterBarDesktopProps } from '../desktop/FilterBarDesktop';
import { Button } from '../../ui/button';
import { ChevronDown } from 'lucide-react';
import { BaseSortingOptionNamesT, Nullable, SortOptionParamsT } from '@/types';
import { FILTER_BAR_MOBILE_SORT_OPTION, SORT_OPTIONS } from '@/constants';

export type FilterBarT = FilterBarDesktopProps['filters'][number];
export type FilterBarParamMapT = FilterBarDesktopProps['currentParamsMap'];

export type DrawerFilterSnaphotT = {
  param: FilterBarT['param'] | SortOptionParamsT;
  name: FilterBarT['name'] | BaseSortingOptionNamesT;
  currentFilters: {
    value: string;
    label: string;
    isSelected: boolean;
  }[];
};

type FilterBarMobileProps = Omit<FilterBarDesktopProps, 'handleToggleSearchParam'> & {
  handleToggleSearchParamsBulk: (param: string, value: string[]) => void;
};

const buildFilterSnapshot = (activeFilter: FilterBarT, currentParamMap: FilterBarParamMapT) => {
  return {
    param: activeFilter.param,
    name: activeFilter.name,
    currentFilters: activeFilter.options.map((option) => ({
      value: option.value,
      label: option.count ? `${option.label} (${option.count})` : option.label,
      isSelected: currentParamMap[activeFilter.param].includes(option.value),
    })),
  };
};

const buildSortSnapshot = (sort: SortOptionParamsT, sortParam: Nullable<string>) => {
  const existingSortParam =
    SORT_OPTIONS.find((option) => option.value === sortParam) ?? SORT_OPTIONS[0];

  return {
    param: sort,
    name: FILTER_BAR_MOBILE_SORT_OPTION[sort].name,
    currentFilters: SORT_OPTIONS.map((option) => ({
      value: option.value,
      label: option.label,
      isSelected: existingSortParam ? existingSortParam.value === option.value : false,
    })),
  };
};

export const FilterBarMobile: FC<FilterBarMobileProps> = ({
  currentParamsMap,
  filters,
  handleSetSortParam,
  handleToggleSearchParamsBulk,
  sortParam,
  totalCount,
}) => {
  const [filtersSnapshot, setFiltersSnapshot] = useState<Nullable<DrawerFilterSnaphotT>>(null);

  const handleFilterDrawerOpen = (filter: FilterBarT) => {
    setFiltersSnapshot(buildFilterSnapshot(filter, currentParamsMap));
  };

  const handleSortDrawerOpen = (sort: SortOptionParamsT) => {
    setFiltersSnapshot(buildSortSnapshot(sort, sortParam));
  };

  const handleFilterSnapshotChange = (value: string) => {
    setFiltersSnapshot((prevFiltersSnapshot) => {
      if (!prevFiltersSnapshot) return null;

      if (prevFiltersSnapshot.param === FILTER_BAR_MOBILE_SORT_OPTION.sort.param) {
        return {
          ...prevFiltersSnapshot,
          currentFilters: prevFiltersSnapshot.currentFilters.map((filter) => {
            if (filter.value === value) {
              return {
                ...filter,
                isSelected: !filter.isSelected,
              };
            }

            return {
              ...filter,
              isSelected: false,
            };
          }),
        };
      }

      return {
        ...prevFiltersSnapshot,
        currentFilters: prevFiltersSnapshot.currentFilters.map((filter) => ({
          ...filter,
          isSelected: value === filter.value ? !filter.isSelected : filter.isSelected,
        })),
      };
    });
  };

  const handleFilterSnapshotApply = () => {
    if (!filtersSnapshot) return;

    if (filtersSnapshot.param === FILTER_BAR_MOBILE_SORT_OPTION.sort.param) {
      const selectedSortParam = filtersSnapshot.currentFilters.find((param) => param.isSelected);

      handleSetSortParam(selectedSortParam?.value ?? SORT_OPTIONS[0].value);

      setFiltersSnapshot(null);
      return;
    }

    const filtersToApply = filtersSnapshot.currentFilters
      .filter((item) => item.isSelected)
      .map((item) => item.value);

    handleToggleSearchParamsBulk(filtersSnapshot.param, filtersToApply);

    setFiltersSnapshot(null);
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
                onClick={() => handleFilterDrawerOpen(filter)}
                variant="outline"
                size="lg"
                className="gap-2 border-1 border-gray-200 bg-gray-100 text-gray-600"
              >
                {filter.name} <ChevronDown className="text-gray-500" />
              </Button>
            ))}

            <Button
              variant="outline"
              size="lg"
              className="gap-2 border-1 border-gray-200 bg-gray-100 text-gray-600"
              onClick={() => handleSortDrawerOpen(FILTER_BAR_MOBILE_SORT_OPTION.sort.param)}
            >
              Sort by <ChevronDown className="text-gray-500" />
            </Button>
          </div>
        </div>
      </div>
      <FilterDrawer
        activeFilter={filtersSnapshot}
        setActiveFilter={setFiltersSnapshot}
        handleFilterSnapshotChange={handleFilterSnapshotChange}
        handleFilterSnapshotApply={handleFilterSnapshotApply}
      />
    </>
  );
};
