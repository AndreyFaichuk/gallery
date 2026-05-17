'use client';

import { FC, useState } from 'react';
import { Command, CommandInput, CommandList, CommandGroup } from '@/app/components/ui/command';
import { Suggestions } from './Suggestions';
import { Products } from './Products';
import { VALID_PARAMS } from '@/hooks/use-filter-params';
import { useSearchParams } from 'next/navigation';
import { usePaintings } from '@/hooks';
import { useDebounceValue } from 'usehooks-ts';

type SuggestionsAndProductsAllProps = {
  onClose: VoidFunction;
};

export const SuggestionsAndProductsAll: FC<SuggestionsAndProductsAllProps> = ({ onClose }) => {
  const searchParams = useSearchParams();

  const queryParam = searchParams.get(VALID_PARAMS.QUERY);

  const [value, setValue] = useState(queryParam ?? '');

  const [debouncedValue] = useDebounceValue(value, 500);

  const {
    paintingsAndSuggestions: { paintings, suggestions },
    arePaintingsLoading,
  } = usePaintings({
    query: debouncedValue,
  });

  return (
    <Command className="overflow-visible rounded-md" shouldFilter={false}>
      <div className="relative">
        <CommandInput
          value={value}
          onValueChange={setValue}
          placeholder="Search paintings..."
          className="h-11"
        />
      </div>

      {debouncedValue && (
        <CommandList className="max-h-none overflow-visible">
          <div className="flex flex-col md:flex-row gap-4 p-2">
            <CommandGroup className="w-full md:flex-1 overflow-hidden p-0">
              <Suggestions
                suggestions={suggestions}
                isLoading={arePaintingsLoading}
                onClose={onClose}
              />
            </CommandGroup>

            <div className="w-px bg-border" />

            <CommandGroup className="w-full md:flex-1 overflow-hidden p-0">
              <Products paintings={paintings} isLoading={arePaintingsLoading} onClose={onClose} />
            </CommandGroup>
          </div>
        </CommandList>
      )}
    </Command>
  );
};
