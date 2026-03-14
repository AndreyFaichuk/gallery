'use client';

import { Handbag, Search } from 'lucide-react';
import { Logo } from './components/Logo';
import { Popover, PopoverContent, PopoverTrigger } from '../../ui/popover';
import { PaintingsSearch } from '../../PaintingsSearch';
import { NavigationMenu } from './components/NavigationMenu';
import { CurrencySellector } from './components/CurrencySellector';

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
              className="border-0 w-[90vw] max-w-[600px] p-0"
            >
              <PaintingsSearch />
            </PopoverContent>
          </Popover>

          <Logo />
          <div className="flex gap-6 items-center relative">
            <CurrencySellector />
            <Handbag className="size-8 cursor-pointer" />
          </div>
        </div>
        <NavigationMenu />
      </div>
    </header>
  );
};
