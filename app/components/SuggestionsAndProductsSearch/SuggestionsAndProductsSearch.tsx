'use client';

import { type FC, type KeyboardEvent, useEffect, useRef, useState } from 'react';
import { X } from 'lucide-react';

import { Input } from '../ui/input';
import { Popover, PopoverContent, PopoverTrigger } from '../ui/popover';
import { useDebouncedValue } from '@/hooks';
import { Suggestions } from '../SuggestionsAndProductsAll/Suggestions';
import { Products } from '../SuggestionsAndProductsAll/Products';
import type { PaintingT } from '@/types/schema.types';
import { useFilterParams } from '@/hooks';

type SuggestionsAndProductsSearchProps = {
  suggestions: string[];
  paintings: PaintingT[];
};

const PARTIAL_BACKGROUND_COLOR = '#F8FFF6';

export const SuggestionsAndProductsSearch: FC<SuggestionsAndProductsSearchProps> = ({
  paintings,
  suggestions,
}) => {
  const { queryParam, handleSetQueryParam } = useFilterParams({ params: [] });

  const [open, setOpen] = useState(false);
  const [triggerWidth, setTriggerWidth] = useState(0);
  const triggerRef = useRef<HTMLDivElement>(null);

  const [activeSuggestionIndex, setActiveSuggestionIndex] = useState<number | null>(null);

  const { value, setValue } = useDebouncedValue({
    callback: handleSetQueryParam,
    initialValue: queryParam ?? '',
  });

  const hasQuery = Boolean(value.trim());
  const hasResults = suggestions.length > 0 || paintings.length > 0;
  const shouldOpen = hasQuery && hasResults;

  const updateTriggerWidth = () => {
    if (triggerRef.current) {
      setTriggerWidth(triggerRef.current.offsetWidth);
    }
  };

  const handleTriggerInteract = () => {
    updateTriggerWidth();
  };

  // biome-ignore lint/correctness/useExhaustiveDependencies: <explanation>
  useEffect(() => {
    const onResize = () => {
      updateTriggerWidth();
    };

    window.addEventListener('resize', onResize);
    return () => window.removeEventListener('resize', onResize);
  }, []);

  useEffect(() => {
    setValue(queryParam ?? '');
    setActiveSuggestionIndex(null);
  }, [queryParam, setValue]);

  // biome-ignore lint/correctness/useExhaustiveDependencies: <explanation>
  useEffect(() => {
    if (!shouldOpen) {
      setOpen(false);
      return;
    }

    updateTriggerWidth();
  }, [shouldOpen]);

  const handleClear = () => {
    setValue('');
    setActiveSuggestionIndex(null);
    handleSetQueryParam('');
    setOpen(false);
  };

  const handleKeyDown = (e: KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Escape') {
      setOpen(false);
      setActiveSuggestionIndex(null);
      return;
    }

    if (!suggestions.length) {
      return;
    }

    if (e.key === 'ArrowDown') {
      e.preventDefault();

      if (hasResults) {
        setOpen(true);
      }

      setActiveSuggestionIndex((prev) =>
        prev === null || prev === suggestions.length - 1 ? 0 : prev + 1,
      );
      return;
    }

    if (e.key === 'ArrowUp') {
      e.preventDefault();

      if (hasResults) {
        setOpen(true);
      }

      setActiveSuggestionIndex((prev) =>
        prev === null || prev === 0 ? suggestions.length - 1 : prev - 1,
      );
      return;
    }

    if (e.key === 'Enter' && activeSuggestionIndex !== null) {
      e.preventDefault();

      const selectedSuggestion = suggestions[activeSuggestionIndex];

      setValue(selectedSuggestion);
      setActiveSuggestionIndex(null);
      handleSetQueryParam(selectedSuggestion);
      setOpen(false);
    }
  };

  const afterIcon = value ? (
    <button
      type="button"
      onClick={handleClear}
      className="cursor-pointer"
      aria-label="Clear search"
    >
      <X className="size-4" />
    </button>
  ) : undefined;

  return (
    <div className="flex w-full justify-center">
      <div className="relative flex w-1/3 flex-col items-center gap-6">
        <h1 className="text-2xl font-body">Search results</h1>

        <Popover
          open={open}
          onOpenChange={(nextOpen) => {
            if (!nextOpen) {
              setOpen(false);
              return;
            }

            if (shouldOpen) {
              updateTriggerWidth();
              setOpen(true);
            }
          }}
        >
          <PopoverTrigger asChild>
            <div className="w-full" ref={triggerRef} aria-controls="search-listbox">
              <Input
                style={{ backgroundColor: PARTIAL_BACKGROUND_COLOR }}
                placeholder="Search paintings..."
                value={value}
                onChange={(e) => setValue(e.target.value)}
                onFocus={handleTriggerInteract}
                onClick={handleTriggerInteract}
                onKeyDown={handleKeyDown}
                afterIcon={afterIcon}
                aria-autocomplete="list"
                aria-activedescendant={
                  activeSuggestionIndex !== null ? `option-${activeSuggestionIndex}` : undefined
                }
              />
            </div>
          </PopoverTrigger>

          <PopoverContent
            side="bottom"
            align="start"
            sideOffset={8}
            onOpenAutoFocus={(e) => e.preventDefault()}
            className="border-0 p-0"
            style={{ width: triggerWidth }}
          >
            <div className="flex w-full justify-around rounded-md bg-white shadow-md">
              <Suggestions
                activeSuggestionIndex={activeSuggestionIndex}
                suggestions={suggestions}
                setActiveSuggestionIndex={setActiveSuggestionIndex}
                isLoading={false}
              />

              <Products paintings={paintings} isLoading={false} />
            </div>
          </PopoverContent>
        </Popover>
      </div>
    </div>
  );
};
