import type { FC } from 'react';
import { ActiveFilter } from '../ActiveFilter';

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

export const ActiveFiltersDesktop: FC<ActiveFiltersDesktopProps> = ({
  filtersToRender,
  handleToggleSearchParam,
  handleRemoveAllSearchParams,
}) => {
  const shouldRender = filtersToRender.length > 0;

  if (!shouldRender) return null;

  return (
    <div className="flex gap-2 w-full items-center flex-wrap">
      {filtersToRender.map((filter) => (
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
