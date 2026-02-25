'use client';

import Link from 'next/link';
import type { FC } from 'react';

type SuggestionsProps = {
  suggestions: string[];
  setActiveSuggestionIndex: (i: number | null) => void;
  activeSuggestionIndex: number | null;
};

export const Suggestions: FC<SuggestionsProps> = ({
  suggestions,
  setActiveSuggestionIndex,
  activeSuggestionIndex,
}) => {
  return (
    <div className="flex flex-col flex-1 px-3 py-2">
      <p className="text-xs text-muted-foreground">Suggestions</p>
      <hr className="my-2" />
      <ul id="search-listbox" className="flex flex-col gap-1">
        {suggestions.map((item, index) => {
          const isActive = activeSuggestionIndex === index;

          return (
            <li
              key={item}
              id={`option-${index}`}
              aria-selected={isActive}
              onMouseEnter={() => setActiveSuggestionIndex(index)}
              onMouseLeave={() => setActiveSuggestionIndex(null)}
              className="w-full rounded-md"
            >
              <Link
                href={`/search?q=${item.toLocaleLowerCase()}`}
                className={`
                  block w-full px-3 py-2
                  ${isActive ? 'bg-gray-50 underline decoration-2 underline-offset-2' : 'hover:bg-gray-50 hover:underline hover:decoration-2 hover:underline-offset-2'}
                `}
              >
                {item}
              </Link>
            </li>
          );
        })}
      </ul>
    </div>
  );
};
