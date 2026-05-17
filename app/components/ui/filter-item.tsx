import { FC } from 'react';
import { Separator } from './separator';
import { Checkbox } from './checkbox';
import { FilterT } from '@/types';

type FilterItemProps = {
  onFilterChange: (value: string) => void;
  filter: FilterT;
};

export const FilterItem: FC<FilterItemProps> = ({ onFilterChange, filter }) => {
  const { isSelected, label, value } = filter;

  const handleFilterItemChange = () => onFilterChange(value);

  return (
    <div className="flex flex-col gap-4">
      <div className="flex gap-2 justify-between" onClick={handleFilterItemChange}>
        <span>{label}</span>
        <Checkbox
          id={`${label}-checkbox`}
          checked={isSelected}
          value={value}
          onChange={handleFilterItemChange}
        />
      </div>
    </div>
  );
};
