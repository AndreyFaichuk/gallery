'use client';

import { cn } from '@/app/lib/utils';

const QUESTIONS = [
  {
    text: 'Can light hold a memory?',
    margin: 'mt-5 ml-20',
  },
  {
    text: 'At what point does colour become atmosphere?',
    margin: 'mt-20',
  },
  {
    text: 'Can beauty transform without demanding explantion?',
    margin: 'mt-10',
  },
] as const;

export const Questions = () => {
  return (
    <section>
      <div className="flex justify-center items-center gap-4">
        <div className="h-px max-w-24 flex-1 bg-amber-600" />
        <h2 className="text-xs uppercase tracking-widest text-stone-500 sm:text-lg">
          inside studio & process
        </h2>
      </div>
      <div className="h-[300px] flex justify-around">
        {QUESTIONS.map(({ margin, text }) => (
          <div
            className={cn(
              'font-body text-2xl flex gap-4 flex-1 items-start justify-center',
              margin,
            )}
            key={text}
          >
            <div className="mt-[0.6em] h-px max-w-12 flex-1 bg-amber-600" />
            <div className="w-44">
              <p>{text}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};
