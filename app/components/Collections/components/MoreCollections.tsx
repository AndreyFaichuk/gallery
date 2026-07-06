'use client';

import { Asterisk } from 'lucide-react';

export const MoreCollections = () => {
  return (
    <section className="flex h-[200px] items-center justify-center bg-stone-50">
      <div className="flex flex-col items-center gap-8">
        <Asterisk className="size-6 text-stone-500" strokeWidth={1.5} />

        <p className="text-center font-serif text-[18px] leading-[1.6] text-stone-800">
          More collections will be revealed soon.
          <br />
          The journey continues.
        </p>
      </div>
    </section>
  );
};
