import { PaintingSearchCatalog } from '@/app/components/layout/PaintingSearchCatalog';
import { PaintingsFilterBar } from '@/app/components/PaintingsFilterBar';
import { SuggestionsAndProductsSearch } from '@/app/components/SuggestionsAndProductsSearch';

import type { PaintingsSearchParamsProps } from '@/types';

import getAllPaintings from '@/utils/routeHandlers/getAllPaintings';
import getPaintings from '@/utils/routeHandlers/getPaintings';
import getSuggestions from '@/utils/routeHandlers/getSuggestions';

const wait = () => new Promise((res) => setTimeout(() => res(1), 10000));

export const SearchPageContent = async ({ searchParams }: PaintingsSearchParamsProps) => {
  const { collections, availability, query, page, sort } = await searchParams;

  const { filters, items, totalCount, exchange } = await getAllPaintings({
    collectionId: collections,
    isAvailable: availability,
    page: page ? Number(page) : undefined,
    query,
    sort,
  });

  const [suggestions, paintings] = await Promise.all([
    getSuggestions({ query: query ?? '' }),
    getPaintings({ query: query ?? '' }),
  ]);

  await wait();

  return (
    <>
      <SuggestionsAndProductsSearch paintings={paintings} suggestions={suggestions} />

      <PaintingsFilterBar filters={filters} totalCount={totalCount}>
        <PaintingSearchCatalog items={items} exchange={exchange} />
      </PaintingsFilterBar>
    </>
  );
};
