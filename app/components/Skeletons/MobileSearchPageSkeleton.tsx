import { PAINTING_ITEM_VARIANT } from '@/types/painting.types';
import { Skeleton } from '../ui/skeleton';
import { PaintingItemSkeleton } from './PaintingItemSkeleton';

export const MobileSearchPageSkeleton = () => {
  return (
    <div className="flex flex-col">
      {/* top filters section */}
      <div className="flex flex-col gap-4">
        {/* paintings count */}
        <div className="flex justify-end">
          <Skeleton className="h-4 w-20 rounded-md" />
        </div>

        {/* filter buttons */}
        <div className="flex gap-2 flex-wrap">
          <Skeleton className="h-11 w-28 rounded-xl" />
          <Skeleton className="h-11 w-28 rounded-xl" />
          <Skeleton className="h-11 w-28 rounded-xl" />
        </div>
      </div>

      {/* catalog */}
      <div className="flex flex-col">
        <PaintingItemSkeleton variant={PAINTING_ITEM_VARIANT.SEARCH} />
      </div>
    </div>
  );
};
