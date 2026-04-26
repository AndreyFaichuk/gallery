export type FilterOptionParamsT = 'availability' | 'collections';
export type BaseFilterOptionNamesT = 'Availability' | 'Collections';

export type SortOptionParamsT = 'sort';
export type BaseSortingOptionNamesT = 'Sort by';

export type MenuOptionBase = {
  title: string;
  link?: string;
};

export type MenuOptions = (MenuOptionBase & {
  subMenu?: MenuOptionBase[];
})[];
