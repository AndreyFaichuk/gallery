'use client';

import { FC, useState } from 'react';
import { Button } from '../../ui/button';
import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
  DrawerHandle,
} from '../../ui/drawer';
import { Nullable } from '@/types';
import { DrawerFilterSnaphotT, FilterBarParamMapT, FilterBarT } from './FilterBarMobile';
import { Checkbox } from '../../ui/checkbox';
import { Label } from '../../ui/label';
import { Separator } from '../../ui/separator';

type FilterDrawerProps = {
  activeFilter: Nullable<DrawerFilterSnaphotT>;
  setActiveFilter: (filterName: Nullable<DrawerFilterSnaphotT>) => void;
  handleFilterSnapshotChange: (value: string) => void;
};

export const FilterDrawer: FC<FilterDrawerProps> = ({
  activeFilter,
  setActiveFilter,
  handleFilterSnapshotChange,
}) => {
  if (!activeFilter) return null;

  return (
    <Drawer snapPoints={[1.1]} open={!!activeFilter} onClose={() => setActiveFilter(null)}>
      <DrawerContent className="bg-white">
        <DrawerHeader className="w-full">
          <div className="flex gap-2 items-center justify-between w-full">
            <DrawerTitle>{activeFilter.name}</DrawerTitle>
            <DrawerClose>
              <Button variant="ghost" size="lg" className="font-normal">
                Apply
              </Button>
            </DrawerClose>
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
