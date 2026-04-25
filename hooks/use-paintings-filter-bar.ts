import { FilterOptions } from '@/app/components/PaintingsFilterBar/PaintingsFilterBar';
import { breakpointOptions, useBreakpoint } from './use-breakpoint';
import { tailwindBreakpoints } from '@/types';
import { useFilterParams } from './use-filter-params';

const LIMIT = 8;

export const usePaintingsFilterBar = (filters: FilterOptions, totalCount: number) => {
  const isBelowMobile = useBreakpoint(tailwindBreakpoints.XS, breakpointOptions.BELOW);

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
    isBelowMobile,
    filtersToRender,
    totalPages,
    ...filterParams,
  };
};
