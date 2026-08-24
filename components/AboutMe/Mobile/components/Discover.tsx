'use client';

import { MoveRight } from 'lucide-react';
import Link from 'next/link';
import { NAVIGATION_MENU_OPTIONS } from '@/constants';

export const Discover = () => {
  return (
    <footer className="flex flex-col gap-2 justify-center items-center font-body">
      <h2 className="text-[10px] leading-none uppercase tracking-[0.2em] text-[#8b735e]">
        step into the world behind the paintings
      </h2>
      <Link
        href={NAVIGATION_MENU_OPTIONS.GALLERY.link}
        className="flex flex-col gap-2 justify-center items-center"
      >
        <h1 className="text-xl uppercase tracking-widest text-stone-500">discover the gallery</h1>

        <div className="flex w-full justify-center items-center gap-2">
          <div className="h-px max-w-24 flex-1 bg-black" />
          <MoveRight className="size-4 text-black" />
        </div>
      </Link>
    </footer>
  );
};
