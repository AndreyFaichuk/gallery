'use client';

import { Handbag, Search } from 'lucide-react';
import { Logo } from './components/Logo';
import { Popover, PopoverContent, PopoverTrigger } from '../../ui/popover';
import { PaintingSearch } from '../../PaintingSearch';
import { NavigationMenu } from './components/NavigationMenu';

export const Header = () => {
  return (
    <header className="h-[210px] pt-9">
      <div className="flex flex-col items-center gap-20">
        <div className="flex justify-between w-full items-center">
          <Popover>
            <PopoverTrigger asChild>
              <Search className="size-8 cursor-pointer" />
            </PopoverTrigger>

            <PopoverContent
              side="bottom"
              align="start"
              alignOffset={0}
              sideOffset={20}
              className="p-0 border-0 w-[90vw] max-w-[600px]"
            >
              <PaintingSearch />
            </PopoverContent>
          </Popover>

          <Logo />
          <Handbag className="size-8 cursor-pointer" />
        </div>
        <NavigationMenu />
      </div>
    </header>
  );
};
