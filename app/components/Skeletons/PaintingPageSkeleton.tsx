import { PAINTING_ITEM_VARIANT } from '@/types';
import { Skeleton } from '../ui/skeleton';
import { PaintingItemSkeleton } from './PaintingItemSkeleton';

const DesktopPaintingInfoSkeleton = () => {
  return (
    <aside className="sticky top-9 w-3/5 xl:w-1/3">
      <div className="flex flex-col gap-8 w-full">
        <div className="flex flex-col gap-4">
          <Skeleton className="h-6 w-44 rounded-sm" />
          <Skeleton className="h-10 w-3/4 rounded-sm" />
          <Skeleton className="h-7 w-28 rounded-sm" />

          <div className="w-1/2">
            <Skeleton className="h-9 w-[104px] rounded-lg" />
          </div>
        </div>

        <Skeleton className="h-7 w-72 rounded-sm" />
        <div className="flex flex-col gap-2">
          <Skeleton className="h-7 w-full rounded-sm" />
          <Skeleton className="h-7 w-11/12 rounded-sm" />
          <Skeleton className="h-7 w-4/5 rounded-sm" />
        </div>
        <div className="flex flex-col gap-2">
          <Skeleton className="h-7 w-full rounded-sm" />
          <Skeleton className="h-7 w-full rounded-sm" />
          <Skeleton className="h-7 w-10/12 rounded-sm" />
        </div>
        <Skeleton className="h-7 w-24 rounded-sm" />
        <Skeleton className="h-6 w-16 rounded-sm" />
        <Skeleton className="h-7 w-44 rounded-sm" />
        <div className="flex flex-col gap-2">
          <Skeleton className="h-7 w-full rounded-sm" />
          <Skeleton className="h-7 w-10/12 rounded-sm" />
        </div>
        <Skeleton className="h-7 w-16 rounded-sm" />
        <Skeleton className="h-7 w-36 rounded-sm" />
      </div>
    </aside>
  );
};

const DesktopPaintingPageSkeleton = () => {
  return (
    <div className="hidden xs:block">
      <div className="grid grid-cols-12">
        <div className="col-start-1 xl:col-start-3 col-span-12 gap-10">
          <div className="flex gap-10 items-start min-h-[1400px]">
            <div className="grid gap-3 w-4/10">
              <Skeleton className="relative overflow-hidden w-full aspect-[7/9] rounded-none" />

              <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                {Array.from({ length: 4 }).map((_, index) => (
                  // biome-ignore lint/suspicious/noArrayIndexKey: skeleton placeholders are static.
                  <Skeleton
                    key={index}
                    className="relative overflow-hidden w-full aspect-[7/9] rounded-none"
                  />
                ))}
              </div>
            </div>

            <DesktopPaintingInfoSkeleton />
          </div>
        </div>

        <div className="col-start-1 xl:col-start-3 col-span-10 mt-20">
          <div className="flex flex-col justify-center gap-8">
            <Skeleton className="h-8 w-48 rounded-sm" />
            <PaintingItemSkeleton
              variant={PAINTING_ITEM_VARIANT.ALSO_LIKE}
              count={4}
              containerClassName="flex gap-2"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

const MobilePaintingInfoSkeleton = () => {
  return (
    <aside className="flex flex-col gap-4">
      <div className="flex flex-col gap-4">
        <Skeleton className="h-7 w-44 rounded-sm" />
        <Skeleton className="h-9 w-3/4 rounded-sm" />
        <Skeleton className="h-6 w-28 rounded-sm" />
      </div>

      <Skeleton className="h-9 w-full rounded-lg" />

      <Skeleton className="h-7 w-72 max-w-full rounded-sm" />
      <Skeleton className="h-px w-full rounded-none" />

      <Skeleton className="h-8 w-48 rounded-sm" />
      <div className="flex flex-col gap-2">
        <Skeleton className="h-7 w-full rounded-sm" />
        <Skeleton className="h-7 w-11/12 rounded-sm" />
        <Skeleton className="h-7 w-4/5 rounded-sm" />
      </div>

      <Skeleton className="h-7 w-16 rounded-sm" />
      <Skeleton className="h-7 w-36 rounded-sm" />

      <div className="flex flex-col gap-4">
        <Skeleton className="h-12 w-full rounded-lg" />
        <Skeleton className="h-px w-full rounded-none" />
      </div>
    </aside>
  );
};

const MobilePaintingPageSkeleton = () => {
  return (
    <div className="xs:hidden">
      <div className="flex flex-col gap-4 mt-12">
        <div className="w-full">
          <Skeleton className="relative aspect-[4/5] overflow-hidden rounded-xl" />

          <div className="mt-3 flex gap-2 overflow-x-auto pb-1">
            {Array.from({ length: 4 }).map((_, index) => (
              // biome-ignore lint/suspicious/noArrayIndexKey: skeleton placeholders are static.
              <Skeleton key={index} className="h-20 w-20 shrink-0 rounded-md" />
            ))}
          </div>
        </div>

        <MobilePaintingInfoSkeleton />

        <div className="flex flex-col justify-center gap-8">
          <Skeleton className="h-8 w-48 rounded-sm" />
          <PaintingItemSkeleton
            variant={PAINTING_ITEM_VARIANT.ALSO_LIKE}
            count={4}
            containerClassName="flex gap-2"
          />
        </div>
      </div>
    </div>
  );
};

export const PaintingPageSkeleton = () => {
  return (
    <>
      <MobilePaintingPageSkeleton />
      <DesktopPaintingPageSkeleton />
    </>
  );
};
