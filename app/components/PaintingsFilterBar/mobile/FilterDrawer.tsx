'use client';

import { FC } from 'react';
import { Button } from '../../ui/button';
import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
  DrawerHandle,
} from '../../ui/drawer';
import { FilterBarMobileNamesT, Nullable } from '@/types';

type FilterDrawerProps = {
  activeFilter: Nullable<FilterBarMobileNamesT>;
  setActiveFilter: (filterName: Nullable<FilterBarMobileNamesT>) => void;
};

export const FilterDrawer: FC<FilterDrawerProps> = ({ activeFilter, setActiveFilter }) => {
  return (
    <Drawer open={!!activeFilter} onClose={() => setActiveFilter(null)}>
      <DrawerContent className="bg-white">
        <DrawerHandle className="top-[-10px]" />
        <DrawerHeader className="w-full">
          <div className="flex gap-2 items-center justify-between w-full">
            <DrawerTitle>{activeFilter}</DrawerTitle>
            <DrawerClose>
              <Button variant="ghost" size="lg" className="font-normal">
                Apply
              </Button>
            </DrawerClose>
          </div>
        </DrawerHeader>
        <DrawerFooter></DrawerFooter>
      </DrawerContent>
    </Drawer>
  );
};
