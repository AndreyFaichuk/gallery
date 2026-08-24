'use client';

import { Handbag, Search } from 'lucide-react';
import { useState } from 'react';
import { SuggestionsAndProductsAll } from '../../../SuggestionsAndProductsAll';
import { Popover, PopoverContent, PopoverTrigger } from '../../../ui/popover';
import { CurrencySellector, Logo, NavigationMenu } from './components';

const DesktopHeader = () => {
  const [isOpenedSearch, setIsOpenedSearch] = useState(false);

  const handleOpenSuggestionsAndProductsAll = (isOpened: boolean) => setIsOpenedSearch(isOpened);

  return (
    <header className="h-[210px] pt-9">
      <div className="flex flex-col items-center gap-20 ">
        <div className="flex justify-between w-full items-center">
          <Popover open={isOpenedSearch} onOpenChange={handleOpenSuggestionsAndProductsAll}>
            <PopoverTrigger>
              <Search className="size-8 cursor-pointer" />
            </PopoverTrigger>

            <PopoverContent
              side="bottom"
              align="start"
              alignOffset={0}
              sideOffset={20}
              className="w-[calc(100vw-32px)] max-w-[600px] p-0"
            >
              <SuggestionsAndProductsAll
                onClose={() => handleOpenSuggestionsAndProductsAll(false)}
              />
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

export default DesktopHeader;
