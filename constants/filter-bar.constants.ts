import { SelectOption } from '@/app/components/ui/select';
import {
  BaseFilterOptionNamesT,
  BaseSortingOptionNamesT,
  FilterOptionParamsT,
  SortOptionParamsT,
} from '@/types';
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

export const FILTER_BAR_MOBILE_SORT_OPTION: Record<
  SortOptionParamsT,
  { param: SortOptionParamsT; name: BaseSortingOptionNamesT }
> = {
  sort: {
    param: 'sort',
    name: 'Sort by',
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
