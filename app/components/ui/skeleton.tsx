import { cn } from '@/app/lib/utils';
import { ComponentProps } from 'react';

const Skeleton = ({ className, ...props }: ComponentProps<'div'>) => {
  return (
    <div
      data-slot="skeleton"
      className={cn('animate-pulse rounded-md bg-neutral-200', className)}
      {...props}
    />
  );
};

export { Skeleton };
