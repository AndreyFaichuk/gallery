import type { Nullable } from '@/types';
import { usePathname, useRouter, useSearchParams } from 'next/navigation';

export const VALID_PARAMS = {
  PAGE: 'page',
  SORT: 'sort',
  QUERY: 'query',
} as const;

type useFilterParamsProps = {
  params: string[];
};

export const useFilterParams = ({ params }: useFilterParamsProps) => {
  const searchParams = useSearchParams();
  const router = useRouter();
  const pathname = usePathname();

  const sortParam = searchParams.get(VALID_PARAMS.SORT);
  const queryParam = searchParams.get(VALID_PARAMS.QUERY);
  const page = Number(searchParams.get(VALID_PARAMS.PAGE)) || 1;

  const availability = params[0];
  const collections = params[1];

  const availabilityParam = availability ? searchParams.get(availability) : null;
  const collectionsParam = collections ? searchParams.get(collections) : null;

  const currentParamsMap = {
    ...(availability ? { [availability]: availabilityParam?.split(',') || [] } : {}),
    ...(collections ? { [collections]: collectionsParam?.split(',') || [] } : {}),
  };

  const currentSearchParams = new URLSearchParams(searchParams.toString());

  const handleToggleSearchParamsBulk = (param: string, values: string[]) => {
    if (values.length) {
      currentSearchParams.set(param, values.join(','));
    } else {
      currentSearchParams.delete(param);
    }

    currentSearchParams.set(VALID_PARAMS.PAGE, '1');

    router.replace(`${pathname}?${currentSearchParams.toString()}`);
  };

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

    if (param !== VALID_PARAMS.PAGE) {
      currentSearchParams.set(VALID_PARAMS.PAGE, '1');
    }

    router.replace(`?${currentSearchParams.toString()}`);
  };

  const handleSetPage = (value: number) => {
    currentSearchParams.set(VALID_PARAMS.PAGE, String(value));

    return `${pathname}?${currentSearchParams.toString()}`;
  };

  const handleSetSortParam = (value: Nullable<string>) => {
    if (!value) return;

    currentSearchParams.set(VALID_PARAMS.SORT, String(value));
    currentSearchParams.set(VALID_PARAMS.PAGE, '1');

    router.replace(`?${currentSearchParams.toString()}`);
  };

  const handleRemoveAllSearchParams = () => {
    for (const param of params) {
      currentSearchParams.delete(param);
    }

    router.replace(`?${currentSearchParams.toString()}`);
  };

  const handleSetQueryParam = (value: string) => {
    const trimmedValue = value.trim();

    if (trimmedValue) {
      currentSearchParams.set(VALID_PARAMS.QUERY, trimmedValue);
    } else {
      currentSearchParams.delete(VALID_PARAMS.QUERY);
    }

    currentSearchParams.set(VALID_PARAMS.PAGE, '1');

    router.replace(`${pathname}?${currentSearchParams.toString()}`);
  };

  return {
    page,
    sortParam,
    currentParamsMap,
    queryParam,
    handleSetSortParam,
    handleToggleSearchParam,
    handleRemoveAllSearchParams,
    handleToggleSearchParamsBulk,
    handleSetPage,
    handleSetQueryParam,
  };
};

export default useFilterParams;
