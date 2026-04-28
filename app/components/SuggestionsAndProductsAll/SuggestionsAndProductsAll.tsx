'use client';

import { type KeyboardEvent, useEffect, useState } from 'react';
import { X } from 'lucide-react';
import { Input } from '../ui/input';
import { Suggestions } from './Suggestions';
import { Products } from './Products';
import { VALID_PARAMS } from '@/hooks/use-filter-params';
import { useSearchParams } from 'next/navigation';
import { useDebouncedValue, usePaintings } from '@/hooks';

const PARTIAL_BACKGROUND_COLOR = '#F5F0EC';

export const SuggestionsAndProductsAll = () => {
  const searchParams = useSearchParams();
  const queryParam = searchParams.get(VALID_PARAMS.QUERY);

  const [activeSuggestionIndex, setActiveSuggestionIndex] = useState<number | null>(null);

  const { value, setValue } = useDebouncedValue({
    callback: () => {}, // No-op callback, using value directly
    initialValue: queryParam ?? '',
  });

  const {
    paintingsAndSuggestions: { paintings, suggestions },
    arePaintingsLoading,
  } = usePaintings({ query: value });

  const handleClear = () => {
    setValue('');
  };

  const handleKeyDown = (e: KeyboardEvent<HTMLInputElement>) => {
    if (!suggestions.length) return;

    if (e.key === 'ArrowDown') {
      e.preventDefault();
      setActiveSuggestionIndex((prev) =>
        prev === null || prev === suggestions.length - 1 ? 0 : prev + 1,
      );
    }

    if (e.key === 'ArrowUp') {
      e.preventDefault();
      setActiveSuggestionIndex((prev) =>
        prev === null || prev === 0 ? suggestions.length - 1 : prev - 1,
      );
    }

    if (e.key === 'Enter' && activeSuggestionIndex !== null) {
      return;
    }
  };

  const afterIcon = value ? (
    <button type="button" onClick={handleClear} className="cursor-pointer">
      <X className="size-4" />
    </button>
  ) : undefined;

  return (
    <div className="relative w-full" aria-controls="search-listbox">
      <Input
        style={{ backgroundColor: PARTIAL_BACKGROUND_COLOR }}
        placeholder="Search paintings..."
        autoFocus
        onChange={(e) => setValue(e.target.value)}
        onKeyDown={handleKeyDown}
        value={value}
        afterIcon={afterIcon}
        aria-autocomplete="list"
        aria-activedescendant={
          activeSuggestionIndex !== null ? `option-${activeSuggestionIndex}` : undefined
        }
      />

      {value && (
        <div
          className="absolute mt-2 w-full rounded-md shadow-md z-50 flex justify-around"
          style={{ backgroundColor: PARTIAL_BACKGROUND_COLOR }}
        >
          <Suggestions
            activeSuggestionIndex={activeSuggestionIndex}
            suggestions={suggestions}
            setActiveSuggestionIndex={setActiveSuggestionIndex}
            isLoading={arePaintingsLoading}
          />

          <Products paintings={paintings} isLoading={arePaintingsLoading} />
        </div>
      )}
    </div>
  );
};
