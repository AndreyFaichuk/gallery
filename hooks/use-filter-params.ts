import { useRouter, useSearchParams } from 'next/navigation';
import { useState, useEffect } from 'react';
import useDebounce from './use-debounce';

type useFilterParamsProps = {
  params: string[];
};

export const useFilterParams = ({ params }: useFilterParamsProps) => {
  const searchParams = useSearchParams();
  const router = useRouter();

  const [availability, collections] = params;

  const availabilityParam = searchParams.get(availability);
  const collectionsParam = searchParams.get(collections);

  const [filters, setFilters] = useState({
    [availability]: availabilityParam?.split(',') || [],
    [collections]: collectionsParam?.split(',') || [],
  });

  const debouncedFilters = useDebounce(filters, 600);

  useEffect(() => {
    const currentSearchParams = new URLSearchParams(searchParams.toString());

    for (const [param, values] of Object.entries(debouncedFilters)) {
      if (values.length) {
        currentSearchParams.set(param, values.join(','));
      } else {
        currentSearchParams.delete(param);
      }
    }

    router.replace(`?${currentSearchParams.toString()}`);
  }, [debouncedFilters, searchParams, router.replace]);

  const handleToggleSearchParam = (param: string, value: string) => {
    setFilters((prev) => {
      const currentValues = prev[param] || [];

      const newValues = currentValues.includes(value)
        ? currentValues.filter((v) => v !== value)
        : [...currentValues, value];

      return {
        ...prev,
        [param]: newValues,
      };
    });
  };

  const handleRemoveAllSearchParams = () => {
    const cleared = Object.fromEntries(params.map((param) => [param, []]));
    setFilters(cleared);
  };

  return {
    currentParamsMap: filters,
    handleToggleSearchParam,
    handleRemoveAllSearchParams,
  };
};

export default useFilterParams;
