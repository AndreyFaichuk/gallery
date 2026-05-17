'use client';

import { FC } from 'react';
import { FilterDrawer } from './FilterDrawer';
import { Button } from '../../ui/button';
import { ChevronDown } from 'lucide-react';
import { FilterBarMobileProps } from '@/types';
import { FILTER_BAR_MOBILE_SORT_OPTION } from '@/constants';
import { useFilterManage } from '@/hooks';

export const FilterBarMobile: FC<FilterBarMobileProps> = ({
  currentParamsMap,
  filters,
  handleSetSortParam,
  handleToggleSearchParamsBulk,
  sortParam,
  totalCount,
}) => {
  const {
    filtersSnapshot,
    handleFilterOpen,
    handleFilterSnapshotChange,
    handleFilterSnapshotApply,
    setFiltersSnapshot,
    handleSortOpen,
  } = useFilterManage({
    currentParamsMap,
    sortParam,
    handleSetSortParam,
    handleToggleSearchParamsBulk,
  });

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
                onClick={() => handleFilterOpen(filter)}
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
              onClick={() => handleSortOpen(FILTER_BAR_MOBILE_SORT_OPTION.sort.param)}
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
