import { PaintingsFilterBarSkeleton } from '@/app/components/Skeletons';
import { Skeleton } from '@/app/components/ui/skeleton';

const PREVIEW_SLOTS = [
  'col-[1_/_3] row-[1_/_2] md:col-[1_/_5] md:row-[1_/_3]',
  'col-[1_/_3] row-[2_/_3] md:col-[5_/_9] md:row-[1_/_2]',
  'col-[2_/_3] row-[3_/_4] md:col-[9_/_13] md:row-[1_/_2]',
  'col-[1_/_2] row-[3_/_4] md:col-[5_/_10] md:row-[2_/_3]',
  'col-[1_/_3] row-[4_/_5] md:col-[10_/_13] md:row-[2_/_3]',
];

const PaginationSkeleton = () => {
  return (
    <div className="flex justify-center mt-4">
      <div className="flex flex-row items-center gap-1">
        <Skeleton className="h-9 w-[92px] rounded-sm" />
        <Skeleton className="h-9 w-9 rounded-sm" />
        <Skeleton className="h-9 w-9 rounded-sm" />
        <Skeleton className="h-9 w-9 rounded-sm" />
        <Skeleton className="h-9 w-[68px] rounded-sm" />
      </div>
    </div>
  );
};

const GalleryHeroSkeleton = () => {
  return (
    <div className="flex justify-center">
      <div className="flex w-[350px] max-w-full flex-col items-center gap-2 px-4 xs:px-0">
        <Skeleton className="h-9 w-28 rounded-sm" />
        <div className="flex w-full flex-col items-center gap-2">
          <Skeleton className="h-6 w-full rounded-sm" />
          <Skeleton className="h-6 w-11/12 rounded-sm" />
          <Skeleton className="h-6 w-2/3 rounded-sm" />
        </div>
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
      <div className="flex w-full flex-wrap items-center justify-between gap-4">
        <div className="flex items-start gap-4">
          <Skeleton className="size-6 shrink-0 rounded-sm" />
          <div className="flex w-[200px] flex-col items-start gap-2 xs:w-[250px] md:w-[400px]">
            <Skeleton className="h-8 w-48 rounded-sm" />
            <Skeleton className="h-6 w-full rounded-sm" />
            <Skeleton className="h-6 w-11/12 rounded-sm" />
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

const Loading = () => {
  return (
    <div className="flex flex-col mt-10">
      <GalleryHeroSkeleton />

      <div className="flex flex-col gap-12 mt-16">
        <PaintingsFilterBarSkeleton />

        <div className="flex">
          <ExclusiveWorksSkeleton />
        </div>

        <PaginationSkeleton />
      </div>
    </div>
  );
};

export default Loading;
