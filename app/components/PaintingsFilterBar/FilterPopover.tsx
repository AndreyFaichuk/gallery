'use client';

import { type FC, Fragment } from 'react';
import { Popover, PopoverContent, PopoverTrigger } from '../ui/popover';
import { ChevronDown } from 'lucide-react';
import { FilterOption } from './FilterOption';
import type { FilterOptions } from './PaintingsFilterBar';
import { Select, type SelectOption } from '../ui/select';
import type { Nullable } from '@/types';

const PARTIAL_BACKGROUND_COLOR = '#F0EBE5';

export const SORT_OPTIONS: SelectOption<string>[] = [
  {
    value: 'name',
    label: 'Alphabetically, A-Z',
  },
  {
    value: '-name',
    label: 'Alphabetically, Z-A',
  },
  {
    value: 'price',
    label: 'Price, low to high',
  },
  {
    value: '-price',
    label: 'Price, high to low',
  },
  {
    value: 'date',
    label: 'Date, old to new',
  },
  {
    value: '-date',
    label: 'Date, new to old',
  },
] as const;

type FilterPopoverProps = {
  totalCount: number;
  filters: FilterOptions;
  handleToggleSearchParam: (param: string, value: string) => void;
  handleSetSortParam: (value: string) => void;
  currentParamsMap: {
    [x: string]: string[];
  };
  sortParam: Nullable<string>;
};

export const FilterPopover: FC<FilterPopoverProps> = ({
  filters,
  handleToggleSearchParam,
  handleSetSortParam,
  currentParamsMap,
  totalCount,
  sortParam,
}) => {
  const currentSortOption =
    SORT_OPTIONS.find((option) => option.value === sortParam) ?? SORT_OPTIONS[0];

  return (
    <div className="flex items-center justify-between">
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

        <PopoverContent align="start" className="border-0 p-0 w-[300px] " sideOffset={10}>
          <ul
            className="flex flex-col gap-2  rounded-md shadow-md p-3"
            style={{ backgroundColor: PARTIAL_BACKGROUND_COLOR }}
          >
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
      <div className="flex items-center gap-4">
        <div className="flex items-center gap-2">
          <p>Sort by: </p>
          <Select
            instanceId="sort-select"
            optionClassName="bg-[#FBFFF5]"
            className="min-w-[170px]"
            value={currentSortOption}
            onChange={(option) => handleSetSortParam(option?.value ?? '')}
            options={SORT_OPTIONS}
            isSearchable={false}
          />
        </div>
        {`${totalCount} paintings`}
      </div>
    </div>
  );
};
