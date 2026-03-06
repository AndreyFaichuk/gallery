'use client';

import { cn } from '@/app/lib/utils';

type FilterOptionProps = {
  label: string;
  checked: boolean;
  disabled: boolean;
  onChange: () => void;
};

export const FilterOption = ({ label, checked, onChange, disabled = false }: FilterOptionProps) => {
  return (
    <li>
      <label
        className={cn(
          'flex items-center gap-2 cursor-pointer',
          disabled && 'cursor-default opacity-50',
        )}
      >
        <input type="checkbox" checked={checked} onChange={onChange} disabled={disabled} />
        {label}
      </label>
    </li>
  );
};
