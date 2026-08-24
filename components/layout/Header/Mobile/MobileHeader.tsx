'use client';

import { Handbag, Menu, Search, X } from 'lucide-react';
import { useState } from 'react';
import { Logo, NavigationMenu, SuggestAndProductsAllMobile, Titles } from './components';

export const MobileHeader = () => {
  const [isNavigationMenuOpen, setIsNavigationMenuOpen] = useState(false);
  const [isSuggestAndProductsOpen, setIsSuggestAndProductsOpen] = useState(false);

  const handleToggleNavigationMenu = () => setIsNavigationMenuOpen((prev) => !prev);
  const handleToggleSuggestAndProducts = () => setIsSuggestAndProductsOpen((prev) => !prev);

  return (
    <header className="flex flex-col pt-2 gap-4 relative mb-10">
      <div className="flex flex-wrap justify-center gap-x-10">
        <Titles />
      </div>

      <div className="flex justify-between items-center px-2">
        {isNavigationMenuOpen ? (
          <X className="size-8" onClick={handleToggleNavigationMenu} />
        ) : (
          <Menu className="size-8" onClick={handleToggleNavigationMenu} />
        )}

        <Logo />

        <div className="flex gap-2 relative">
          {!isSuggestAndProductsOpen && (
            <Search
              className="size-8 absolute right-[40px]"
              onClick={handleToggleSuggestAndProducts}
            />
          )}
          <Handbag className="size-8" />
        </div>
      </div>

      <NavigationMenu isOpen={isNavigationMenuOpen} onClose={handleToggleNavigationMenu} />

      <SuggestAndProductsAllMobile
        isOpen={isSuggestAndProductsOpen}
        onClose={handleToggleSuggestAndProducts}
      />
    </header>
  );
};
