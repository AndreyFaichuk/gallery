'use client';

import { Handbag, Search } from 'lucide-react';
import { Logo } from './components/Logo';
import { Popover, PopoverContent, PopoverTrigger } from '../../ui/popover';
import { PaintingSearch } from '../../PaintingSearch';

export const Header = () => {
  return (
    <header className="flex justify-around h-[160px] items-center">
      <Popover>
        <PopoverTrigger asChild>
          <Search className="size-8 cursor-pointer" />
        </PopoverTrigger>

        <PopoverContent
          side="bottom"
          align="start"
          alignOffset={-300}
          sideOffset={20}
          className="p-0 border-0 w-[90vw] max-w-[700px]"
        >
          <PaintingSearch />
        </PopoverContent>
      </Popover>

      <Logo />
      <Handbag className="size-8 cursor-pointer" />
    </header>
  );
};
