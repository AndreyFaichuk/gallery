'use client';

import { type FC, Fragment } from 'react';
import { Popover, PopoverContent, PopoverTrigger } from '../ui/popover';
import { ChevronDown } from 'lucide-react';
import { FilterOption } from './FilterOption';
import type { FilterOptions, PaintingsFilterBarProps } from './PaintingsFilterBar';

type FilterPopoverProps = {
  filters: FilterOptions;
  handleToggleSearchParam: (param: string, value: string) => void;
  currentParamsMap: {
    [x: string]: string[];
  };
};

export const FilterPopover: FC<FilterPopoverProps> = ({
  filters,
  handleToggleSearchParam,
  currentParamsMap,
}) => {
  return (
    <Popover>
      <div className="flex items-center gap-2">
        <p>Filter: </p>
        <PopoverTrigger asChild>
          <div className="flex items-center gap-1">
            <span className="hover:opacity-70 hover:underline decoration-1 underline-offset-2 cursor-pointer">
              {filters.map((filter) => filter.name).join(', ')}
            </span>
            <ChevronDown className="size-3" />
          </div>
        </PopoverTrigger>
      </div>

      <PopoverContent align="start" className="border-0 p-0 w-[300px]" sideOffset={10}>
        <ul className="flex flex-col gap-2 bg-white rounded-md shadow-md p-3">
          {filters.map((block, blockIndex) => {
            return block.options.map((option, optionIndex) => {
              const isLastBlock = blockIndex === filters.length - 1;
              const isFirstOption = optionIndex === 0;
              const currentValue = currentParamsMap[block.param];

              return (
                <Fragment key={option.value}>
                  {isFirstOption && <p className="text-xs text-muted-foreground">{block.name}</p>}
                  <FilterOption
                    disabled={option.count === 0}
                    checked={currentValue.includes(option.value)}
                    label={`${option.label} (${option.count})`}
                    onChange={() => handleToggleSearchParam(block.param, option.value)}
                  />
                  {option.shoudAddDivider && !isLastBlock && <hr className="border-t" />}
                </Fragment>
              );
            });
          })}
        </ul>
      </PopoverContent>
    </Popover>
  );
};
