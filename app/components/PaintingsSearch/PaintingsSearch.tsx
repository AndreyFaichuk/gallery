'use client';

import { type ChangeEvent, type KeyboardEvent, useState, useMemo, useCallback } from 'react';
import { X } from 'lucide-react';
import { Input } from '../ui/input';
import { Suggestions } from './Suggestions';
import { Products } from './Products';
import usePaintings from '@/hooks/use-paintings';
import useDebouncedValue from '@/hooks/use-debounced-value';

export const PaintingsSearch = () => {
  const [search, setSearch] = useState('');
  const [activeSuggestionIndex, setActiveSuggestionIndex] = useState<number | null>(null);

  const {
    paintingsAndSuggestions: { paintings, suggestions },
    arePaintingsLoading,
  } = usePaintings({ query: search });

  const handleSearch = (search: string) => {
    setSearch(search);
  };

  const { value, setValue } = useDebouncedValue({
    callback: handleSearch,
    initialValue: '',
  });

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

  const afterIcon = search ? (
    <button type="button" onClick={handleClear} className="cursor-pointer">
      <X className="size-4" />
    </button>
  ) : undefined;

  return (
    <div className="relative w-full" aria-controls="search-listbox">
      <Input
        className="bg-white"
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

      {search && (
        <div className="absolute mt-2 w-full rounded-md shadow-md z-50 flex justify-around bg-white">
          <Suggestions
            activeSuggestionIndex={activeSuggestionIndex}
            suggestions={suggestions}
            setActiveSuggestionIndex={setActiveSuggestionIndex}
            isLoading={arePaintingsLoading}
          />

          <Products products={paintings} isLoading={arePaintingsLoading} />
        </div>
      )}
    </div>
  );
};
