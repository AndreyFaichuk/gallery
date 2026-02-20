'use client';

import { Handbag, Search } from 'lucide-react';
import { Logo } from './components/Logo';

export const Header = () => {
  return (
    <header className="flex justify-around h-[160px] items-center">
      <Search className="size-8 cursor-pointer" />
      <Logo />
      <Handbag className="size-8 cursor-pointer" />
    </header>
  );
};
