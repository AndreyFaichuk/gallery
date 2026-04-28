'use client';

import { FC, useEffect, useState } from 'react';

import {
  Command,
  CommandInput,
  CommandGroup,
  CommandItem,
  CommandList,
} from '@/app/components/ui/command';
import { Drawer, DrawerContent, DrawerTitle } from '@/app/components/ui/drawer';
import { VisuallyHidden } from 'radix-ui';
import { SuggestionMobile } from './SuggestionMobile';
import { getMediaContentUrl } from '@/utils';
import { ProductMobile } from './ProductMobile';
import { cn } from '@/app/lib/utils';
import { useSearchParams } from 'next/navigation';
import { usePaintings, VALID_PARAMS } from '@/hooks';
import { InitialSearchState } from './InitialSearchState';
import { Loader2 } from 'lucide-react';
import { EmptyResults } from './EmptyResults';
import { useDebounceValue } from 'usehooks-ts';

type SuggestAndProductsAllMobileProps = {
  isOpen: boolean;
  onClose: VoidFunction;
};

export const SuggestAndProductsAllMobile: FC<SuggestAndProductsAllMobileProps> = ({
  isOpen,
  onClose,
}) => {
  const searchParams = useSearchParams();
  const queryParam = searchParams.get(VALID_PARAMS.QUERY);

  const [value, setValue] = useState(queryParam ?? '');

  const [deboucedValue] = useDebounceValue(value, 500);

  const {
    paintingsAndSuggestions: { paintings, suggestions },
    arePaintingsLoading,
  } = usePaintings({ query: deboucedValue });

  useEffect(() => {
    setValue(queryParam ?? '');
  }, [queryParam]);

  const handleClearQueryAndClose = () => {
    setValue('');
    onClose();
  };

  const isInitialState = !deboucedValue.trim();
  const hasResults = suggestions.length > 0 || paintings.length > 0;

  const isEmptySearch = deboucedValue.trim() && !hasResults && !arePaintingsLoading;

  const renderContent = () => {
    if (isInitialState) return <InitialSearchState />;

    if (isEmptySearch) return <EmptyResults query={deboucedValue} />;

    if (arePaintingsLoading)
      return (
        <div className="flex items-center justify-center py-8 h-2.5">
          <Loader2 className="h-8 w-8 animate-spin" />
        </div>
      );

    return (
      <>
        {suggestions.length > 0 && (
          <CommandGroup heading="Suggestions">
            <div className="flex overflow-scroll h-14">
              {suggestions.map((suggestion) => (
                <CommandItem
                  onSelect={handleClearQueryAndClose}
                  key={suggestion}
                  value={suggestion}
                >
                  <SuggestionMobile suggestion={suggestion} />
                </CommandItem>
              ))}
            </div>
          </CommandGroup>
        )}

        {paintings.length > 0 && (
          <CommandGroup heading="Products">
            <div className="flex flex-col border-1 border-gray-200 rounded-md p-2 gap-2">
              {paintings.map((painting, index) => {
                const firstImageUrl = getMediaContentUrl(`${painting.id}/${painting.imageUrls[0]}`);

                const isLastElement = paintings.length - 1 === index;

                return (
                  <CommandItem
                    key={painting.id}
                    value={painting.name}
                    className={cn('border-b-1 border-gray-200 pb-4', {
                      'border-b-0 pb-1': isLastElement,
                    })}
                    onSelect={handleClearQueryAndClose}
                  >
                    <ProductMobile
                      painting={painting}
                      previewImagUrl={firstImageUrl}
                      key={painting.id}
                    />
                  </CommandItem>
                );
              })}
            </div>
          </CommandGroup>
        )}
      </>
    );
  };

  return (
    <Drawer snapPoints={[1]} open={isOpen} onClose={handleClearQueryAndClose}>
      <DrawerContent className="bg-white gap-2">
        <VisuallyHidden.Root>
          <DrawerTitle></DrawerTitle>
        </VisuallyHidden.Root>

        <Command shouldFilter={false} className="gap-2">
          <CommandInput
            className="h-[40px]"
            placeholder="Search paintings..."
            value={value}
            onValueChange={setValue}
          />

          <CommandList>{renderContent()}</CommandList>
        </Command>
      </DrawerContent>
    </Drawer>
  );
};
