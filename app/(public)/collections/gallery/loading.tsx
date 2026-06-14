import { PaintingsFilterBarSkeleton } from '@/app/components/Skeletons';
import { Skeleton } from '@/app/components/ui/skeleton';

const PREVIEW_SLOTS = [
  'col-[1_/_3] row-[1_/_2] md:col-[1_/_5] md:row-[1_/_3]',
  'col-[1_/_3] row-[2_/_3] md:col-[5_/_9] md:row-[1_/_2]',
  'col-[2_/_3] row-[3_/_4] md:col-[9_/_13] md:row-[1_/_2]',
  'col-[1_/_2] row-[3_/_4] md:col-[5_/_10] md:row-[2_/_3]',
  'col-[1_/_3] row-[4_/_5] md:col-[10_/_13] md:row-[2_/_3]',
];

const ALL_PAINTINGS_SKELETON_COUNT = 8;

const LoadMoreSkeleton = () => {
  return (
    <div className="m-auto">
      <Skeleton className="h-8 w-[166px] rounded-lg" />
    </div>
  );
};

const GalleryHeroSkeleton = () => {
  return (
    <div className="mb-5 flex justify-center">
      <div className="flex w-[350px] max-w-full flex-col items-center gap-2">
        <Skeleton className="h-9 w-28 rounded-sm" />
        <Skeleton className="h-5 w-44 rounded-sm" />
      </div>
    </div>
  );
};

const ExclusivePaintingPreviewSkeleton = () => {
  return (
    <div className="grid aspect-[4/5] grid-cols-[1.18fr_0.95fr] grid-rows-[1.15fr_0.5fr_0.9fr_0.5fr] gap-1.5 overflow-visible md:aspect-[15/8] md:grid-cols-[repeat(12,minmax(0,1fr))] md:grid-rows-[1.12fr_0.88fr] md:gap-2 2xl:aspect-[5/2]">
      {PREVIEW_SLOTS.map((slot) => (
        <Skeleton key={slot} className={`rounded-lg ${slot}`} />
      ))}
    </div>
  );
};

const ExclusiveWorksSkeleton = () => {
  return (
    <div className="flex w-full flex-col gap-6">
      <div className="flex w-full flex-wrap items-center justify-between">
        <div className="hidden items-start gap-4 xs:flex">
          <div className="flex gap-4">
            <Skeleton className="size-6 shrink-0 rounded-sm" />
            <div className="flex w-[200px] flex-col items-start gap-2 xs:w-[250px] md:w-[400px]">
              <Skeleton className="h-8 w-48 rounded-sm" />
              <Skeleton className="h-5 w-full rounded-sm" />
              <Skeleton className="h-5 w-11/12 rounded-sm" />
            </div>
          </div>
        </div>

        <div className="mb-2 flex w-full justify-center gap-2 xs:hidden">
          <Skeleton className="size-6 shrink-0 rounded-sm" />
          <Skeleton className="h-8 w-48 rounded-sm" />
        </div>

        <div className="flex flex-col items-start gap-4 xs:hidden">
          <div className="flex w-[260px] flex-col items-start gap-2 md:w-[400px]">
            <Skeleton className="h-5 w-full rounded-sm" />
            <Skeleton className="h-5 w-11/12 rounded-sm" />
            <Skeleton className="h-5 w-4/5 rounded-sm" />
          </div>
        </div>

        <div className="flex gap-4 md:gap-2">
          <Skeleton className="size-10 rounded-full md:size-8" />
          <Skeleton className="size-10 rounded-full md:size-8" />
        </div>
      </div>

      <ExclusivePaintingPreviewSkeleton />
    </div>
  );
};

const AllPaintingsGallerySkeleton = () => {
  return (
    <div className="flex flex-col gap-5">
      <Skeleton className="h-8 w-40 rounded-sm" />

      <div className="grid grid-cols-1 justify-items-center gap-y-8 xs:grid-cols-[repeat(auto-fit,minmax(min(100%,16rem),1fr))] xs:gap-x-6 md:grid-cols-[repeat(auto-fit,minmax(min(100%,13.5rem),1fr))] min-[2500px]:grid-cols-[repeat(auto-fit,minmax(min(100%,26rem),1fr))]">
        {Array.from({ length: ALL_PAINTINGS_SKELETON_COUNT }).map((_, index) => (
          // biome-ignore lint/suspicious/noArrayIndexKey: skeleton placeholders are static.
          <div
            key={index}
            className="flex w-full max-w-[350px] flex-col gap-4 min-[2500px]:max-w-[420px]"
          >
            <Skeleton className="aspect-square w-full rounded-lg" />

            <div className="flex flex-col gap-2">
              <Skeleton className="h-5 w-3/4 rounded-sm" />
              <Skeleton className="h-5 w-1/2 rounded-sm" />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

const PaintingsGallerySkeleton = () => {
  return (
    <div className="flex flex-col gap-4">
      <ExclusiveWorksSkeleton />

      <div className="h-[1px] w-full shrink-0 bg-border" />

      <AllPaintingsGallerySkeleton />
    </div>
  );
};

const Loading = () => {
  return (
    <div className="mt-4 flex flex-col">
      <GalleryHeroSkeleton />

      <div className="flex flex-col gap-6">
        <PaintingsFilterBarSkeleton />

        <PaintingsGallerySkeleton />

        <LoadMoreSkeleton />
      </div>
    </div>
  );
};

export default Loading;
