import type { FC } from 'react';
import { cn } from '@/app/lib/utils';
import { PAINTING_ITEM_VARIANT, type PaintingItemVariantT } from '@/types/painting.types';
import { Skeleton } from '../ui/skeleton';

const PAINTING_ITEM_SKELETON_STYLES: Record<
  PaintingItemVariantT,
  {
    rootClassName: string;
    containerClassName: string;
  }
> = {
  [PAINTING_ITEM_VARIANT.CATALOG]: {
    rootClassName: 'w-[480px] max-w-full',
    containerClassName: 'grid xl:grid-cols-2 gap-20 justify-items-center max-w-[90%] mx-auto',
  },
  [PAINTING_ITEM_VARIANT.SEARCH]: {
    rootClassName: 'w-[270px] max-w-full',
    containerClassName:
      'grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-20 justify-items-center max-w-[90%] mx-auto',
  },
  [PAINTING_ITEM_VARIANT.ALSO_LIKE]: {
    rootClassName: 'w-[200px] max-w-full',
    containerClassName: 'grid xl:grid-cols-4 gap-2',
  },
};

type PaintingItemSkeletonProps = {
  variant?: PaintingItemVariantT;
  count?: number;
  containerClassName?: string;
};

export const PaintingItemSkeleton: FC<PaintingItemSkeletonProps> = ({
  variant = PAINTING_ITEM_VARIANT.CATALOG,
  count = 8,
  containerClassName,
}) => {
  const styles = PAINTING_ITEM_SKELETON_STYLES[variant];

  return (
    <div className={cn(styles.containerClassName, containerClassName)}>
      {Array.from({ length: count }).map((_, i) => (
        // biome-ignore lint/suspicious/noArrayIndexKey: skeleton placeholders are static.
        <div key={i} className={cn('w-full flex flex-col gap-4', styles.rootClassName)}>
          <Skeleton className="aspect-[3/4] w-full rounded-none" />

          <div className="flex flex-col gap-2">
            <Skeleton className="h-6 w-2/3 rounded-sm" />
            <Skeleton className="h-6 w-1/3 rounded-sm" />
          </div>
        </div>
      ))}
    </div>
  );
};
