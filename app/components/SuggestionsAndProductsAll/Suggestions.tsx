'use client';

import { useRouter } from 'next/navigation';
import type { FC } from 'react';

import { CommandEmpty, CommandItem } from '../ui/command';
import { SuggestionsSkeleton } from '../Skeletons';

type SuggestionsProps = {
  suggestions: string[];
  isLoading: boolean;
  onClose: VoidFunction;
};

export const Suggestions: FC<SuggestionsProps> = ({ suggestions, isLoading, onClose }) => {
  const router = useRouter();

  if (isLoading) {
    return <SuggestionsSkeleton />;
  }

  return (
    <div className="flex flex-col flex-1 px-3 py-2">
      <p className="text-xs text-muted-foreground">Suggestions</p>

      <hr className="my-2" />

      {!suggestions.length && !isLoading ? (
        <CommandEmpty className="py-4 text-center text-sm">No suggestions</CommandEmpty>
      ) : (
        suggestions.map((item) => (
          <CommandItem
            key={item}
            value={item}
            onSelect={() => {
              router.push(`/collections/search?query=${item}`);
              onClose();
            }}
            className="rounded-md px-3 py-2 cursor-pointer data-[selected=true]:bg-gray-50 data-[selected=true]:underline data-[selected=true]:decoration-2 data-[selected=true]:underline-offset-2"
          >
            {item}
          </CommandItem>
        ))
      )}
    </div>
  );
};
