'use client';

import { FC } from 'react';
import { ActiveFiltersDesktop, ActiveFiltersDesktopProps } from './ActiveFiltersDesktop';
import { FilterBarDesktop, FilterBarDesktopProps } from './FilterBarDesktop';

type PaintingFiltersDesktopProps = FilterBarDesktopProps & ActiveFiltersDesktopProps;

const PaintingFiltersDesktop: FC<PaintingFiltersDesktopProps> = ({ ...props }) => {
  return (
    <>
      <FilterBarDesktop {...props} />
      <ActiveFiltersDesktop {...props} />
    </>
  );
};

export default PaintingFiltersDesktop;
