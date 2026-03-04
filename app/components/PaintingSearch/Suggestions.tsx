'use client';

import { Loader2 } from 'lucide-react';
import Link from 'next/link';
import type { FC } from 'react';

type SuggestionsProps = {
  suggestions: string[];
  setActiveSuggestionIndex: (i: number | null) => void;
  activeSuggestionIndex: number | null;
  isLoading: boolean;
};

export const Suggestions: FC<SuggestionsProps> = ({
  suggestions,
  setActiveSuggestionIndex,
  activeSuggestionIndex,
  isLoading,
}) => {
  return (
    <div className="flex flex-col flex-1 px-3 py-2">
      <p className="text-xs text-muted-foreground">Suggestions</p>
      <hr className="my-2" />

      {isLoading ? (
        <div className="flex items-center justify-center py-8 h-2.5">
          <Loader2 className="h-8 w-8 animate-spin" />
        </div>
      ) : (
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
                  href={`/search?q=${item}`}
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
      )}

      {!isLoading && !suggestions.length && (
        <div className="flex justify-center">
          <p className="px-3 py-2 text-sm">No suggestions</p>
        </div>
      )}
    </div>
  );
};
