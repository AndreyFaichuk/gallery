import {
  BaseFilterOptionNamesT,
  BaseSortingOptionNamesT,
  FilterOptionParamsT,
  SortOptionParamsT,
} from './navigation.types';
import { Nullable } from './shared.types';

export type DrawerFilterSnaphotT = {
  param: FilterBarT['param'] | SortOptionParamsT;
  name: FilterBarT['name'] | BaseSortingOptionNamesT;
  currentFilters: FilterT[];
};

export type ActiveFiltersDesktopProps = {
  handleToggleSearchParam: (param: string, value: string) => void;
  handleRemoveAllSearchParams: VoidFunction;
  filtersToRender: {
    param: string;
    paramLabel: string;
    value: string;
    label: string;
  }[];
};

export type FilterBarT = FilterBarDesktopProps['filters'][number];

export type Option = {
  label: string;
  value: string;
  count: number;
  shoudAddDivider?: boolean;
};

export type FilterOptions = {
  param: FilterOptionParamsT;
  name: BaseFilterOptionNamesT;
  options: Option[];
}[];

export type FilterT = {
  value: string;
  label: string;
  isSelected: boolean;
};

export type FilterBarParamMapT = FilterBarDesktopProps['currentParamsMap'];

export type FilterBarDesktopProps = {
  totalCount: number;
  filters: FilterOptions;
  handleToggleSearchParamsBulk: (param: string, value: string[]) => void;
  handleRemoveAllSearchParams: VoidFunction;
  handleSetSortParam: (value: string) => void;
  currentParamsMap: {
    [x: string]: string[];
  };
  sortParam: Nullable<string>;
};

export type FilterBarMobileProps = Omit<FilterBarDesktopProps, 'handleToggleSearchParam'> & {
  handleToggleSearchParamsBulk: (param: string, value: string[]) => void;
  handleRemoveAllSearchParams: VoidFunction;
};
