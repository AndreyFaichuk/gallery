import { PAINTING_ITEM_VARIANT, type PaintingItemVariantT } from '@/types/painting.types';
import { Skeleton } from '../ui/skeleton';
import { PaintingsFilterBarSkeleton } from './FilterBarSkeleton';
import { PaintingItemSkeleton } from './PaintingItemSkeleton';

type DesktopSearchPageSkeletonProps = {
  variant?: PaintingItemVariantT;
  showPagination?: boolean;
};

export const DesktopSearchPageSkeleton = ({
  variant = PAINTING_ITEM_VARIANT.CATALOG,
  showPagination = true,
}: DesktopSearchPageSkeletonProps) => {
  return (
    <div className="flex w-full flex-col gap-12">
      <PaintingsFilterBarSkeleton />

      <PaintingItemSkeleton variant={variant} />

      {showPagination && (
        <div className="flex justify-center mt-4">
          <div className="flex flex-row items-center gap-1">
            <Skeleton className="h-9 w-[92px] rounded-sm" />
            <Skeleton className="h-9 w-9 rounded-sm" />
            <Skeleton className="h-9 w-9 rounded-sm" />
            <Skeleton className="h-9 w-9 rounded-sm" />
            <Skeleton className="h-9 w-[68px] rounded-sm" />
          </div>
        </div>
      )}
    </div>
  );
};
