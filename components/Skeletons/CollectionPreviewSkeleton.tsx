import { Skeleton } from '../ui/skeleton';

export const CollectionPreviewSkeleton = () => {
  return (
    <div
      aria-hidden="true"
      className="relative -mx-4 h-[400px] xs:h-[700px] sm:-mx-6 md:-mx-8 lg:-mx-12 xl:-mx-20 2xl:-mx-60"
    >
      <Skeleton className="absolute inset-0 rounded-none" />

      <div
        className="absolute inset-0 xs:hidden"
        style={{
          background: '#f5f0ea',
        }}
      />

      <div
        className="absolute inset-0 hidden xs:block"
        style={{
          background:
            'linear-gradient(86deg, #f5f0ea 29%, rgba(245,240,234,0.6) 38%, transparent 45%)',
        }}
      />

      <div className="absolute inset-y-0 left-0 flex w-full flex-col items-center justify-between gap-0 px-4 py-10 text-center text-[#6f594c] xs:inset-0 xs:w-auto xs:items-stretch xs:gap-6 xs:px-4 xs:py-24 xs:text-left xs:text-black sm:px-6 md:px-8 lg:px-12 xl:px-20 2xl:px-60">
        <Skeleton className="h-6 w-[232px] max-w-full rounded-sm xs:w-52" />

        <Skeleton className="h-9 w-[282px] max-w-full rounded-sm xs:h-10 xs:w-64" />

        <div className="flex w-full items-center justify-center gap-2 xs:justify-start">
          <div className="h-px w-12 bg-neutral-300 xs:hidden" />
          <Skeleton className="size-4 shrink-0 rounded-sm xs:size-6" />
          <div className="h-px w-12 bg-neutral-300 xs:w-16" />
        </div>

        <div className="flex w-full flex-col gap-2 xs:max-w-[400px]">
          <Skeleton className="mx-auto h-5 w-[356px] max-w-full rounded-sm xs:mx-0 xs:w-full" />
          <Skeleton className="mx-auto h-5 w-[348px] max-w-full rounded-sm xs:mx-0 xs:w-full" />
          <Skeleton className="mx-auto h-5 w-[260px] max-w-full rounded-sm xs:mx-0 xs:w-4/5" />
        </div>

        <div className="flex w-full items-center justify-center gap-2 font-normal text-[#6f594c] xs:max-w-[200px] xs:justify-start xs:font-semibold xs:text-neutral-700">
          <Skeleton className="h-6 w-[154px] rounded-sm xs:w-44" />
          <Skeleton className="size-4 shrink-0 rounded-sm" />
        </div>
      </div>
    </div>
  );
};
