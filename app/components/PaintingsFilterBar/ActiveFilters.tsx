import type { FC } from 'react';
import { ActiveFilter } from './ActiveFilter';

type ActiveFiltersProps = {
  handleToggleSearchParam: (param: string, value: string) => void;
  handleRemoveAllSearchParams: VoidFunction;
  currentParamsMap: {
    param: string;
    paramLabel: string;
    value: string;
    label: string;
  }[];
};

export const ActiveFilters: FC<ActiveFiltersProps> = ({
  currentParamsMap,
  handleToggleSearchParam,
  handleRemoveAllSearchParams,
}) => {
  const shouldRender = currentParamsMap.length > 0;

  if (!shouldRender) return null;

  return (
    <div className="flex gap-2 w-full items-center flex-wrap">
      {currentParamsMap.map((filter) => (
        <ActiveFilter
          {...filter}
          key={`${filter.param}-${filter.value}`}
          onClick={() => handleToggleSearchParam(filter.param, filter.value)}
        />
      ))}
      <span
        className="hover:opacity-70 hover:underline decoration-1 underline-offset-2 cursor-pointer"
        onClick={handleRemoveAllSearchParams}
        onKeyDown={undefined}
      >
        Remove all
      </span>
    </div>
  );
};
