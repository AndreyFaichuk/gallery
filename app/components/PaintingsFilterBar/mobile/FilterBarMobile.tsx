'use client';

import { FC, useState } from 'react';
import { FilterDrawer } from './FilterDrawer';
import { FilterBarDesktopProps } from '../desktop/FilterBarDesktop';
import { Button } from '../../ui/button';
import { ChevronDown } from 'lucide-react';
import { FilterBarMobileNamesT, Nullable } from '@/types';

export const FilterBarMobile: FC<FilterBarDesktopProps> = (obj) => {
  const [activeFilter, setActiveFilter] = useState<Nullable<FilterBarMobileNamesT>>(null);

  console.log(obj, 'obj');

  const handleDrawerOpen = (filterName: FilterBarMobileNamesT) => {
    setActiveFilter(filterName);
  };

  return (
    <>
      <div className="flex gap-2 flex-wrap">
        {obj.filters.map((filter) => (
          <Button
            key={filter.name}
            onClick={() => handleDrawerOpen(filter.name as FilterBarMobileNamesT)}
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
          onClick={() => handleDrawerOpen('Sort by' as FilterBarMobileNamesT)}
        >
          Sort by <ChevronDown className="text-gray-500" />
        </Button>
      </div>
      <FilterDrawer activeFilter={activeFilter} setActiveFilter={setActiveFilter} />
    </>
  );
};
