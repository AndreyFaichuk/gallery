import { FilterOptions } from '@/types';
import { useFilterParams } from './use-filter-params';

const LIMIT = 8;

export const usePaintingsFilterBar = (filters: FilterOptions, totalCount: number) => {
  const filterParams = useFilterParams({
    params: filters.map((f) => f.param),
  });

  const filtersToRender = Object.entries(filterParams.currentParamsMap).flatMap(
    ([param, value]) => {
      const currentFilterBlock = filters.find((f) => f.param === param);

      return value.map((nestedValue) => {
        const currentFilter = currentFilterBlock?.options.find(
          (option) => option.value === nestedValue,
        );

        return {
          param,
          paramLabel: currentFilterBlock?.name ?? '',
          value: nestedValue,
          label: currentFilter?.label ?? '',
        };
      });
    },
  );

  const totalPages = Math.ceil(totalCount / LIMIT);

  return {
    filtersToRender,
    totalPages,
    ...filterParams,
  };
};
