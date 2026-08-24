'use client';

import type { FC } from 'react';
import { ActiveFiltersDesktop } from './ActiveFiltersDesktop';
import { FilterBarDesktop } from './FilterBarDesktop';
import type { ActiveFiltersDesktopProps, FilterBarDesktopProps } from '@/types';

type PaintingFiltersDesktopProps = FilterBarDesktopProps & ActiveFiltersDesktopProps;

const PaintingFiltersDesktop: FC<PaintingFiltersDesktopProps> = ({ ...props }) => {
  return (
    <div className="flex flex-col gap-4">
      <FilterBarDesktop {...props} />
      <ActiveFiltersDesktop {...props} />
    </div>
  );
};

export default PaintingFiltersDesktop;
