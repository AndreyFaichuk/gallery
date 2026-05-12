import { Suspense } from 'react';

import type { PaintingsSearchParamsProps } from '@/types';
import { MobileSearchPageSkeleton } from '@/app/components/Skeletons';
import { SearchPageContent } from '@/app/components/SearchContent';

const Page = async ({ searchParams }: PaintingsSearchParamsProps) => {
  return (
    <Suspense fallback={<MobileSearchPageSkeleton />}>
      <SearchPageContent searchParams={searchParams} />
    </Suspense>
  );
};

export default Page;
