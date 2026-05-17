import { FILTER_BAR_MOBILE_SORT_OPTION, SORT_OPTIONS } from '@/constants';
import { FilterBarParamMapT, FilterBarT, Nullable, SortOptionParamsT } from '@/types';

const buildFilterSnapshot = (activeFilter: FilterBarT, currentParamMap: FilterBarParamMapT) => {
  return {
    param: activeFilter.param,
    name: activeFilter.name,
    currentFilters: activeFilter.options.map((option) => ({
      value: option.value,
      label: option.count ? `${option.label} (${option.count})` : option.label,
      isSelected: currentParamMap[activeFilter.param].includes(option.value),
    })),
  };
};

const buildSortSnapshot = (sort: SortOptionParamsT, sortParam: Nullable<string>) => {
  const existingSortParam =
    SORT_OPTIONS.find((option) => option.value === sortParam) ?? SORT_OPTIONS[0];

  return {
    param: sort,
    name: FILTER_BAR_MOBILE_SORT_OPTION[sort].name,
    currentFilters: SORT_OPTIONS.map((option) => ({
      value: option.value,
      label: option.label,
      isSelected: existingSortParam ? existingSortParam.value === option.value : false,
    })),
  };
};

export { buildFilterSnapshot, buildSortSnapshot };
