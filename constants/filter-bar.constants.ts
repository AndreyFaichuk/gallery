import { SelectOption } from '@/app/components/ui/select';
import { BaseFilterOptionNamesT, FilterOptionParamsT, MenuOptions } from '@/types';
import { NAVIGATION_MENU_OPTIONS } from './navigation.constants';

export const FILTER_BAR_MOBILE_OPTIONS: Record<
  FilterOptionParamsT,
  { param: FilterOptionParamsT; name: BaseFilterOptionNamesT }
> = {
  availability: {
    param: 'availability',
    name: 'Availability',
  },
  collections: {
    param: 'collections',
    name: 'Collections',
  },
} as const;

export const SORT_OPTIONS: SelectOption<string>[] = [
  {
    value: 'name',
    label: 'Alphabetically, A-Z',
  },
  {
    value: '-name',
    label: 'Alphabetically, Z-A',
  },
  {
    value: 'price',
    label: 'Price, low to high',
  },
  {
    value: '-price',
    label: 'Price, high to low',
  },
  {
    value: 'date',
    label: 'Date, old to new',
  },
  {
    value: '-date',
    label: 'Date, new to old',
  },
] as const;

export const DESKTOP_MENU_OPTIONS: MenuOptions = [
  {
    title: 'original oil paintings',
    subMenu: [
      {
        title: NAVIGATION_MENU_OPTIONS.ALL_PAINTINGS.title,
        link: NAVIGATION_MENU_OPTIONS.ALL_PAINTINGS.link,
      },
      {
        title: NAVIGATION_MENU_OPTIONS.AVAILABLE_PAINTINGS.title,
        link: NAVIGATION_MENU_OPTIONS.AVAILABLE_PAINTINGS.link,
      },
    ],
  },
  {
    title: NAVIGATION_MENU_OPTIONS.ABOUT_ME.title,
    link: NAVIGATION_MENU_OPTIONS.ABOUT_ME.link,
  },
] as const;

export const MOBILE_MENU_OPTIONS: MenuOptions = [
  {
    title: NAVIGATION_MENU_OPTIONS.ALL_PAINTINGS.title,
    link: NAVIGATION_MENU_OPTIONS.ALL_PAINTINGS.link,
  },
  {
    title: NAVIGATION_MENU_OPTIONS.AVAILABLE_PAINTINGS.title,
    link: NAVIGATION_MENU_OPTIONS.AVAILABLE_PAINTINGS.link,
  },
  {
    title: NAVIGATION_MENU_OPTIONS.ABOUT_ME.title,
    link: NAVIGATION_MENU_OPTIONS.ABOUT_ME.link,
  },
] as const;
