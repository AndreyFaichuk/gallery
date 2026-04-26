'use client';

import { FC } from 'react';
import { Button } from '../../ui/button';
import { Drawer, DrawerContent, DrawerFooter, DrawerHeader, DrawerTitle } from '../../ui/drawer';
import { Nullable } from '@/types';
import { DrawerFilterSnaphotT } from './FilterBarMobile';
import { Checkbox } from '../../ui/checkbox';
import { Separator } from '../../ui/separator';

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
  if (!activeFilter) return null;

  return (
    <Drawer snapPoints={[1.1]} open={!!activeFilter} onClose={() => setActiveFilter(null)}>
      <DrawerContent className="bg-white">
        <DrawerHeader className="w-full">
          <div className="flex gap-2 items-center justify-between w-full">
            <DrawerTitle>{activeFilter.name}</DrawerTitle>

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
          {activeFilter.currentFilters.map((filter, index) => {
            const isLastBlock = index === activeFilter.currentFilters.length - 1;

            return (
              <div key={filter.label} className="flex flex-col gap-4">
                <div
                  className="flex gap-2 justify-between"
                  onClick={() => handleFilterSnapshotChange(filter.value)}
                >
                  <span>{filter.label}</span>
                  <Checkbox
                    id={`${filter.label}-checkbox`}
                    checked={filter.isSelected}
                    value={filter.value}
                    onChange={() => handleFilterSnapshotChange(filter.value)}
                  />
                </div>
                {!isLastBlock && <Separator />}
              </div>
            );
          })}
        </DrawerFooter>
      </DrawerContent>
    </Drawer>
  );
};
