import type { Nullable } from '@/types';
import { usePathname, useRouter, useSearchParams } from 'next/navigation';

const VALID_PARAMS = {
  PAGE: 'page',
  SORT: 'sort',
} as const;

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

  const sortParam = searchParams.get(VALID_PARAMS.SORT);
  const page = Number(searchParams.get(VALID_PARAMS.PAGE)) || 1;

  const currentParamsMap = {
    [availability]: availabilityParam?.split(',') || [],
    [collections]: collectionsParam?.split(',') || [],
  };

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

  return {
    page,
    sortParam,
    currentParamsMap,
    handleSetSortParam,
    handleToggleSearchParam,
    handleRemoveAllSearchParams,
    handleSetPage,
  };
};

export default useFilterParams;
