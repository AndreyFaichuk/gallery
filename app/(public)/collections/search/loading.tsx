import { SuggestionsAndProductsSearch } from '@/app/components/SuggestionsAndProductsSearch';
import { PaintingItemSkeleton } from '@/app/components/ui/skeleton';
import { PAINTING_ITEM_VARIANT } from '@/types/painting-types';

const Loading = () => {
  return (
    <>
      <SuggestionsAndProductsSearch paintings={[]} suggestions={[]} />
      <PaintingItemSkeleton variant={PAINTING_ITEM_VARIANT.SEARCH} />
    </>
  );
};

export default Loading;
