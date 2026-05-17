import { FILTER_BAR_MOBILE_SORT_OPTION, SORT_OPTIONS } from '@/constants';
import {
  DrawerFilterSnaphotT,
  FilterBarDesktopProps,
  FilterBarT,
  Nullable,
  SortOptionParamsT,
} from '@/types';
import { buildFilterSnapshot, buildSortSnapshot } from '@/utils';
import { useState } from 'react';

type useFilterManageProps = {
  currentParamsMap: FilterBarDesktopProps['currentParamsMap'];
  sortParam: FilterBarDesktopProps['sortParam'];
  handleToggleSearchParamsBulk: (param: string, value: string[]) => void;
  handleSetSortParam: (value: string) => void;
};

export const useFilterManage = ({
  currentParamsMap,
  sortParam,
  handleToggleSearchParamsBulk,
  handleSetSortParam,
}: useFilterManageProps) => {
  const [filtersSnapshot, setFiltersSnapshot] = useState<Nullable<DrawerFilterSnaphotT>>(null);

  const handleFilterOpen = (filter: FilterBarT) => {
    setFiltersSnapshot(buildFilterSnapshot(filter, currentParamsMap));
  };

  const handleSortOpen = (sort: SortOptionParamsT) => {
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

  return {
    handleFilterOpen,
    handleSortOpen,
    handleFilterSnapshotChange,
    handleFilterSnapshotApply,
    setFiltersSnapshot,
    filtersSnapshot,
  };
};
