'use client';

import { Suspense } from 'react';
import { useSearchParams } from 'next/navigation';
import { FILTER_BAR_MOBILE_OPTIONS } from '@/constants';
import { Skeleton } from '../ui/skeleton';

const ACTIVE_FILTER_PARAMS = [
  FILTER_BAR_MOBILE_OPTIONS.availability.param,
  FILTER_BAR_MOBILE_OPTIONS.collections.param,
] as const;

const getActiveFiltersCount = (searchParams: { get: (name: string) => string | null }) =>
  ACTIVE_FILTER_PARAMS.reduce((count, param) => {
    const value = searchParams.get(param);

    if (!value) return count;

    return count + value.split(',').filter(Boolean).length;
  }, 0);

const DesktopFilterBarSkeletonLayout = ({
  activeFiltersCount = 0,
}: {
  activeFiltersCount?: number;
}) => {
  return (
    <div className="hidden xs:block">
      <div className="flex flex-col gap-4">
        <div className="flex items-center justify-between">
          <div className="flex gap-6 flex-wrap">
            <Skeleton className="h-9 w-[112px] rounded-lg" />
            <Skeleton className="h-9 w-[104px] rounded-lg" />
          </div>

          <div className="flex items-center gap-6">
            <div className="flex gap-2 justify-center items-center">
              <Skeleton className="h-6 w-14 rounded-sm" />
              <Skeleton className="h-9 w-[164px] rounded-lg" />
            </div>
            <Skeleton className="h-6 w-24 rounded-sm" />
          </div>
        </div>

        {activeFiltersCount > 0 && (
          <div className="flex gap-2 w-full items-center flex-wrap">
            {Array.from({ length: activeFiltersCount }).map((_, index) => (
              // biome-ignore lint/suspicious/noArrayIndexKey: skeleton placeholders are static.
              <Skeleton key={index} className="h-8 w-32 rounded-lg" />
            ))}
            <Skeleton className="h-6 w-20 rounded-sm" />
          </div>
        )}
      </div>
    </div>
  );
};

const DesktopFilterBarSkeletonWithParams = () => {
  const searchParams = useSearchParams();

  return (
    <DesktopFilterBarSkeletonLayout activeFiltersCount={getActiveFiltersCount(searchParams)} />
  );
};

export const DesktopFilterBarSkeleton = () => {
  return (
    <Suspense fallback={<DesktopFilterBarSkeletonLayout />}>
      <DesktopFilterBarSkeletonWithParams />
    </Suspense>
  );
};

export const MobileFilterBarSkeleton = () => {
  return (
    <div className="xs:hidden">
      <div className="flex gap-2 flex-wrap">
        <div className="flex flex-col gap-2 w-full">
          <div className="w-full flex justify-end">
            <Skeleton className="h-5 w-20 rounded-sm" />
          </div>

          <div className="flex gap-2 flex-wrap">
            <Skeleton className="h-9 w-[112px] rounded-lg" />
            <Skeleton className="h-9 w-[104px] rounded-lg" />
            <Skeleton className="h-9 w-[88px] rounded-lg" />
          </div>
        </div>
      </div>
    </div>
  );
};

export const PaintingsFilterBarSkeleton = () => {
  return (
    <div className="w-full flex flex-col gap-4">
      <MobileFilterBarSkeleton />
      <DesktopFilterBarSkeleton />
    </div>
  );
};
