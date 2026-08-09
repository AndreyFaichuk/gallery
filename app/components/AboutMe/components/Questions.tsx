'use client';

import { cn } from '@/app/lib/utils';

const QUESTIONS = [
  {
    text: 'Can light hold a memory?',
    margin: 'mt-5 ml-20 md:max-lg:mt-8 md:max-lg:ml-0',
  },
  {
    text: 'At what point does colour become atmosphere?',
    margin: 'mt-20 md:max-lg:mt-14',
  },
  {
    text: 'Can beauty transform without demanding explantion?',
    margin: 'mt-10 md:max-lg:mt-10',
  },
] as const;

export const Questions = () => {
  return (
    <section>
      <div className="flex items-center justify-center gap-4 md:max-lg:hidden">
        <div className="h-px max-w-24 flex-1 bg-amber-600" />
        <h2 className="text-xs uppercase tracking-widest text-stone-500 sm:text-lg">
          inside studio & process
        </h2>
      </div>
      <div className="flex h-[300px] justify-around md:max-lg:h-[170px] md:max-lg:gap-5 md:max-lg:px-8">
        {QUESTIONS.map(({ margin, text }) => (
          <div
            className={cn(
              'font-body text-2xl flex gap-4 items-start justify-center md:max-lg:gap-3 md:max-lg:text-lg md:max-lg:leading-[1.3] 2xl:text-[26px] 2xl:leading-[1.35]',
              margin,
            )}
            key={text}
          >
            <div className="mt-[0.6em] h-px w-12 shrink-0 bg-amber-600 md:max-lg:w-6" />

            <div className="max-w-96 md:max-lg:max-w-48">
              <p>{text}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};
