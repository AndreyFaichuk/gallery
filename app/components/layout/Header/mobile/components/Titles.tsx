'use client';

const TITLES_TO_RENDER = ['original oil paintings', 'fine artist', 'worldwide shipping'] as const;

export const Titles = () => (
  <>
    {TITLES_TO_RENDER.map((title) => (
      <span key={title} className="font-medium text-base font-body">
        {title}
      </span>
    ))}
  </>
);
