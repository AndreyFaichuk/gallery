'use client';

import { useState } from 'react';
import { Handbag, Menu, Search, X } from 'lucide-react';
import { AnimatePresence } from 'framer-motion';

import { Titles } from './components/Titles';
import { Logo } from './components/Logo';
import { NavigationMenu } from './components/NavigationMenu';

export const MobileHeader = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen((prev) => !prev);

  return (
    <header className="flex flex-col pt-2 gap-4 relative">
      <div className="flex flex-wrap justify-center gap-x-10">
        <Titles />
      </div>

      <div className="flex justify-between items-center px-2">
        {isOpen ? (
          <X className="size-8 cursor-pointer" onClick={toggleMenu} />
        ) : (
          <Menu className="size-8 cursor-pointer" onClick={toggleMenu} />
        )}

        <Logo />

        <div className="flex gap-2">
          <Search className="size-8 cursor-pointer" />
          <Handbag className="size-8 cursor-pointer" />
        </div>
      </div>

      <AnimatePresence>
        {isOpen && <NavigationMenu onClose={() => setIsOpen(false)} />}
      </AnimatePresence>
    </header>
  );
};
