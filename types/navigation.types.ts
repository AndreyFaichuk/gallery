import { JSX, ReactNode } from 'react';

export type FilterOptionParamsT = 'availability' | 'collections';
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
