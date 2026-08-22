'use client';

const QUESTIONS = [
  {
    text: 'Can light hold a memory?',
  },
  {
    text: 'At what point does colour become atmosphere?',
  },
  {
    text: 'Can beauty transform without demanding explantion?',
  },
] as const;

export const Questions = () => {
  return (
    <section className="font-body text-[#3f3935]">
      <div className="flex justify-center items-center gap-4">
        <div className="h-px max-w-24 flex-1 bg-amber-600" />
        <h2 className="text-[10px] leading-none uppercase tracking-[0.2em] text-[#8b735e]">
          the questions i return to
        </h2>
        <div className="h-px max-w-24 flex-1 bg-amber-600" />
      </div>

      <ul className="mt-2">
        {QUESTIONS.map(({ text }) => {
          return (
            <li
              key={text}
              className="flex min-h-[25px] items-center justify-between gap-6 border-b border-amber-500 py-[3px] pr-6"
            >
              <div className="w-1/2">
                <p className="text-[14px]">{text}</p>
              </div>

              <span className="h-px w-[18px] shrink-0 bg-amber-600" />
            </li>
          );
        })}
      </ul>
    </section>
  );
};
