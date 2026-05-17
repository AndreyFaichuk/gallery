import { X } from 'lucide-react';
import type { FC } from 'react';
import { Button } from '../ui';

export type ActiveFilterProps = {
  onClick: VoidFunction;
  paramLabel: string;
  label: string;
};

export const ActiveFilter: FC<ActiveFilterProps> = ({ label, paramLabel, onClick }) => {
  return (
    <Button variant="outline" className="border-1 border-gray-200 bg-gray-100" onClick={onClick}>
      <span className="font-medium">{label}</span> <X className="size-4" />
    </Button>
  );
};
