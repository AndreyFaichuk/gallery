'use client';

import { NAVIGATION_MENU_OPTIONS } from '@/constants';
import { MoveRight } from 'lucide-react';
import Link from 'next/link';

export const Discover = () => {
  return (
    <footer className="flex flex-col gap-2 justify-center items-center font-body md:max-lg:gap-1">
      <h2 className="text-xs uppercase tracking-widest text-stone-500 sm:text-md md:max-lg:text-[10px] 2xl:text-sm">
        step into the world behind the paintings
      </h2>
      <Link
        href={NAVIGATION_MENU_OPTIONS.GALLERY.link}
        className="flex flex-col gap-2 justify-center items-center"
      >
        <h1 className="text-2xl uppercase tracking-widest text-stone-500 sm:text-4xl md:max-lg:text-2xl 2xl:text-[38px]">
          discover the gallery
        </h1>

        <div className="flex w-full justify-center items-center gap-2">
          <div className="h-px max-w-24 flex-1 bg-black" />
          <MoveRight className="size-4 text-black" />
        </div>
      </Link>
    </footer>
  );
};
