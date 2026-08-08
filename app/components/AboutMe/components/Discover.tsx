'use client';

import { MoveRight } from 'lucide-react';

export const Discover = () => {
  return (
    <footer className="flex flex-col gap-2 justify-center items-center font-body">
      <h2 className="text-xs uppercase tracking-widest text-stone-500 sm:text-md">
        step into the world behind the paintings
      </h2>
      <h1 className="text-2xl uppercase tracking-widest text-stone-500 sm:text-4xl">
        discover the gallery
      </h1>

      <div className="flex gap-2 w-full justify-center items-center">
        <div className="h-px max-w-24 flex-1 bg-black" />
        <MoveRight className="size-4 text-black" />
      </div>
    </footer>
  );
};
