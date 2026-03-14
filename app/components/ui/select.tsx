'use client';

import React from 'react';
import ReactSelect, { type Props } from 'react-select';
import { cn } from '@/app/lib/utils';

export type SelectOption = {
  value: string;
  label: string;
};

type SelectProps = Props<SelectOption, false>;

export const Select = ({ className, ...props }: SelectProps) => {
  return (
    <ReactSelect
      {...props}
      unstyled
      className={cn('text-sm', className)}
      classNames={{
        control: ({ isFocused }) =>
          cn(
            'flex h-10 items-center rounded-md bg-background px-2 transition-colors border-1 border-slate-200',
          ),

        valueContainer: () => 'px-1',

        menu: () => cn('z-50 mt-1 overflow-hidden rounded-md  shadow-md'),

        option: ({ isFocused, isSelected }) =>
          cn(
            'cursor-pointer px-3 py-2 text-sm transition-colors',
            isSelected && 'bg-zinc-200 text-black',
            !isSelected && isFocused && 'bg-zinc-50',
          ),

        placeholder: () => 'text-muted-foreground',

        singleValue: () => 'text-foreground',

        dropdownIndicator: () => 'text-muted-foreground hover:text-foreground',

        indicatorSeparator: () => 'hidden',
      }}
      styles={{
        menuPortal: (base) => ({
          ...base,
          zIndex: 9999,
        }),
      }}
      menuPortalTarget={typeof window !== 'undefined' ? document.body : null}
    />
  );
};
