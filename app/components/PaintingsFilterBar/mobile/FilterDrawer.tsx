'use client';

import React, { FC } from 'react';
import { Button } from '../../ui/button';
import { Drawer, DrawerContent, DrawerFooter, DrawerHeader, DrawerTitle } from '../../ui/drawer';
import { DrawerFilterSnaphotT, Nullable } from '@/types';
import { FilterItem } from '../../ui/filter-item';
import { Separator } from '../../ui';

type FilterDrawerProps = {
  activeFilter: Nullable<DrawerFilterSnaphotT>;
  setActiveFilter: (filterName: Nullable<DrawerFilterSnaphotT>) => void;
  handleFilterSnapshotChange: (value: string) => void;
  handleFilterSnapshotApply: VoidFunction;
};

export const FilterDrawer: FC<FilterDrawerProps> = ({
  activeFilter,
  setActiveFilter,
  handleFilterSnapshotChange,
  handleFilterSnapshotApply,
}) => {
  return (
    <Drawer snapPoints={[1.1]} open={!!activeFilter} onClose={() => setActiveFilter(null)}>
      <DrawerContent className="bg-white">
        <DrawerHeader className="w-full">
          <div className="flex gap-2 items-center justify-between w-full">
            {activeFilter?.name && <DrawerTitle>{activeFilter.name}</DrawerTitle>}

            <Button
              onClick={handleFilterSnapshotApply}
              variant="ghost"
              size="lg"
              className="font-normal text-blue-500"
            >
              Apply
            </Button>
          </div>
        </DrawerHeader>
        <DrawerFooter>
          {activeFilter?.currentFilters.map((filter, index) => {
            const isLastBlock = index === activeFilter?.currentFilters.length - 1;

            return (
              <React.Fragment key={filter.label}>
                <FilterItem filter={filter} onFilterChange={handleFilterSnapshotChange} />
                {!isLastBlock && <Separator />}
              </React.Fragment>
            );
          })}
        </DrawerFooter>
      </DrawerContent>
    </Drawer>
  );
};
