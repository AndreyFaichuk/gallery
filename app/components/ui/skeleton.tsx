'use client';

import type { FC } from 'react';
import { cn } from '@/app/lib/utils';
import { PAINTING_ITEM_VARIANT, type PaintingItemVariantT } from '@/types/painting-types';
import { PaintingsFilterBar } from '../PaintingsFilterBar';

const PAINTING_ITEM_SKELETON_STYLES: Record<
  PaintingItemVariantT,
  {
    rootClassName: string;
    gridClassName: string;
  }
> = {
  [PAINTING_ITEM_VARIANT.CATALOG]: {
    rootClassName: 'w-full max-w-[600px]',
    gridClassName: 'xl:grid-cols-2',
  },
  [PAINTING_ITEM_VARIANT.SEARCH]: {
    rootClassName: 'w-full max-w-[270px]',
    gridClassName: 'xl:grid-cols-4',
  },
  [PAINTING_ITEM_VARIANT.ALSO_LIKE]: {
    rootClassName: 'w-full max-w-[200px]',
    gridClassName: 'xl:grid-cols-4',
  },
};

type PaintingItemSkeletonProps = {
  variant?: PaintingItemVariantT;
};

export const PaintingItemSkeleton: FC<PaintingItemSkeletonProps> = ({
  variant = PAINTING_ITEM_VARIANT.CATALOG,
}) => {
  const styles = PAINTING_ITEM_SKELETON_STYLES[variant];

  return (
    <PaintingsFilterBar filters={[]} totalCount={0}>
      <div
        className={cn(
          'w-full grid gap-20 justify-items-center max-w-[90%] mx-auto',
          styles.gridClassName,
        )}
      >
        {Array.from({ length: 8 }).map((_, i) => (
          // biome-ignore lint/suspicious/noArrayIndexKey: we won't add/delete/move new elements here, so index as a key is ok here
          <div key={i} className={cn('w-full', styles.rootClassName)}>
            <div className="aspect-[3/4] w-full rounded bg-neutral-200 animate-pulse" />
            <div className="mt-4 h-5 w-2/3 rounded bg-neutral-200 animate-pulse" />
            <div className="mt-2 h-4 w-1/3 rounded bg-neutral-200 animate-pulse" />
          </div>
        ))}
      </div>
    </PaintingsFilterBar>
  );
};
