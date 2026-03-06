import { X } from 'lucide-react';
import type { FC } from 'react';

export type ActiveFilterProps = {
  onClick: VoidFunction;
  paramLabel: string;
  label: string;
};

export const ActiveFilter: FC<ActiveFilterProps> = ({ label, paramLabel, onClick }) => {
  return (
    <div
      className="rounded-full border border-gray-400 p-3 flex items-center gap-2 cursor-pointer hover:ring-2 hover:ring-gray-300 h-8"
      onClick={onClick}
      onKeyDown={() => {}}
    >
      {paramLabel}: <span className="font-medium">{label}</span> <X className="size-4" />
    </div>
  );
};
