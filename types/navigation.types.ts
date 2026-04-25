export type FilterOptionParamsT = 'availability' | 'collections';
export type BaseFilterOptionNamesT = 'Availability' | 'Collections';
export type FilterBarMobileNamesT = BaseFilterOptionNamesT & 'Sort by';

export type MenuOptionBase = {
  title: string;
  link?: string;
};

export type MenuOptions = (MenuOptionBase & {
  subMenu?: MenuOptionBase[];
})[];
