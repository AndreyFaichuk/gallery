import type { JSX } from 'react';

export const FILTER_OPTION_PARAMS = {
  AVAILABILITY: 'availability',
  COLLECTIONS: 'collections',
} as const;

export type FilterOptionParamsT = (typeof FILTER_OPTION_PARAMS)[keyof typeof FILTER_OPTION_PARAMS];
export type BaseFilterOptionNamesT = 'Availability' | 'Collections';

export type SortOptionParamsT = 'sort';
export type BaseSortingOptionNamesT = 'Sort by';

export type MenuOptionBase = {
  title: string;
  link?: string;
  icon?: JSX.Element;
};

export type MenuOptions = (MenuOptionBase & {
  subMenu?: MenuOptionBase[];
})[];
