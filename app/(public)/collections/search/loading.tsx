import { PaintingItemSkeleton } from '@/app/components/ui/skeleton';
import { PAINTING_ITEM_VARIANT } from '@/types/painting-types';

const Loading = () => <PaintingItemSkeleton variant={PAINTING_ITEM_VARIANT.SEARCH} />;

export default Loading;
