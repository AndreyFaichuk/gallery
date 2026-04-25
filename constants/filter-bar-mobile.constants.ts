import { BaseFilterOptionNamesT, FilterOptionParamsT } from '@/types';

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
