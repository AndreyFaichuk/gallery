'use client';

import { useState } from 'react';
import { Handbag, Menu, Search, X } from 'lucide-react';
import { AnimatePresence } from 'framer-motion';

import { Titles } from './components/Titles';
import { Logo } from './components/Logo';
import { NavigationMenu } from './components/NavigationMenu';
import { SuggestAndProductsAllMobile } from './components/SuggestAndProductsAllMobile';

export const MobileHeader = () => {
  const [isNavigationMenuOpen, setIsNavigationMenuOpen] = useState(false);
  const [isSuggestAndProductsOpen, setIsSuggestAndProductsOpen] = useState(false);

  const handleToggleNavigationMenu = () => setIsNavigationMenuOpen((prev) => !prev);
  const handleToggleSuggestAndProducts = () => setIsSuggestAndProductsOpen((prev) => !prev);

  return (
    <header className="flex flex-col pt-2 gap-4 relative">
      <div className="flex flex-wrap justify-center gap-x-10">
        <Titles />
      </div>

      <div className="flex justify-between items-center px-2">
        {isNavigationMenuOpen ? (
          <X className="size-8 cursor-pointer" onClick={handleToggleNavigationMenu} />
        ) : (
          <Menu className="size-8 cursor-pointer" onClick={handleToggleNavigationMenu} />
        )}

        <Logo />

        <div className="flex gap-2">
          <Search className="size-8 cursor-pointer" onClick={handleToggleSuggestAndProducts} />
          <Handbag className="size-8 cursor-pointer" />
        </div>
      </div>

      <AnimatePresence>
        {isNavigationMenuOpen && <NavigationMenu onClose={handleToggleNavigationMenu} />}
      </AnimatePresence>

      {isSuggestAndProductsOpen && (
        <SuggestAndProductsAllMobile
          isOpen={isSuggestAndProductsOpen}
          onClose={handleToggleSuggestAndProducts}
        />
      )}
    </header>
  );
};
