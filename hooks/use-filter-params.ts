import { usePathname, useRouter, useSearchParams } from 'next/navigation';
import { useState, useEffect } from 'react';
import useDebounce from './use-debounce';

type useFilterParamsProps = {
  params: string[];
};

export const useFilterParams = ({ params }: useFilterParamsProps) => {
  const searchParams = useSearchParams();
  const router = useRouter();
  const pathname = usePathname();

  const [availability, collections] = params;

  const availabilityParam = searchParams.get(availability);
  const collectionsParam = searchParams.get(collections);

  const currentParamsMap = {
    [availability]: availabilityParam?.split(',') || [],
    [collections]: collectionsParam?.split(',') || [],
  };

  const page = Number(searchParams.get('page')) || 1;

  const currentSearchParams = new URLSearchParams(searchParams.toString());

  const handleToggleSearchParam = (param: string, value: string) => {
    const currentValues = currentSearchParams.get(param)?.split(',') || [];

    const isValueAlreadyApplied = currentValues.includes(value);

    if (isValueAlreadyApplied) {
      const newValues = currentValues.filter((v) => v !== value);

      if (newValues.length) {
        currentSearchParams.set(param, newValues.join(','));
      } else {
        currentSearchParams.delete(param);
      }
    } else {
      const newValues = [...currentValues, value];
      currentSearchParams.set(param, newValues.join(','));
    }

    if (param !== 'page') {
      currentSearchParams.set('page', '1');
    }

    router.replace(`?${currentSearchParams.toString()}`);
  };

  const handleSetPage = (value: number) => {
    currentSearchParams.set('page', String(value));

    return `${pathname}?${currentSearchParams.toString()}`;
  };

  const handleRemoveAllSearchParams = () => {
    for (const param of params) {
      currentSearchParams.delete(param);
    }

    router.replace(`?${currentSearchParams.toString()}`);
  };

  return {
    page,
    currentParamsMap,
    handleToggleSearchParam,
    handleRemoveAllSearchParams,
    handleSetPage,
  };
};

export default useFilterParams;
