import { PaintingItemVariantT } from '@/types/painting.types';
import { PaintingItemSkeleton } from './PaintingItemSkeleton';

export const DesktopSearchPageSkeleton = ({ variant }: { variant?: PaintingItemVariantT }) => {
  return (
    <>
      <div className="flex items-center justify-between mb-10 gap-4">
        <div className="flex items-center gap-4">
          <div className="h-10 w-[140px] rounded-md bg-neutral-200 animate-pulse" />
          <div className="h-10 w-[140px] rounded-md bg-neutral-200 animate-pulse" />
        </div>

        <div className="flex items-center gap-4">
          <div className="h-5 w-16 rounded bg-neutral-200 animate-pulse" />
          <div className="h-10 w-[160px] rounded-md bg-neutral-200 animate-pulse" />
          <div className="h-5 w-24 rounded bg-neutral-200 animate-pulse" />
        </div>
      </div>

      <PaintingItemSkeleton variant={variant} />
    </>
  );
};
