'use client';

import { cn } from '@/app/lib/utils';
import { PaintingT } from '@/types';
import { FC, ReactNode } from 'react';
import { AllPaintingsGalleryItem } from './AllPaintingsGalleryItem';

type AllPaintingsProps = {
  allPaintings: PaintingT[];
};

type AllPaintingsGalleryLayoutProps = {
  children: ReactNode;
  title?: ReactNode;
};

type AllPaintingsGalleryGridProps = {
  children: ReactNode;
};

export const AllPaintingsGalleryLayout: FC<AllPaintingsGalleryLayoutProps> = ({
  children,
  title,
}) => {
  return (
    <div className="flex flex-col gap-5">
      {title}
      {children}
    </div>
  );
};

export const AllPaintingsGalleryGrid: FC<AllPaintingsGalleryGridProps> = ({ children }) => {
  return (
    <div
      className={cn(
        'grid grid-cols-1 justify-items-center gap-y-8',
        'xs:grid-cols-[repeat(auto-fit,minmax(min(100%,16rem),1fr))]',
        'xs:gap-x-6',
        'md:grid-cols-[repeat(auto-fit,minmax(min(100%,13.5rem),1fr))]',
        'min-[2500px]:grid-cols-[repeat(auto-fit,minmax(min(100%,26rem),1fr))]',
      )}
    >
      {children}
    </div>
  );
};

export const AllPaintingsGallery: FC<AllPaintingsProps> = ({ allPaintings }) => {
  return (
    <AllPaintingsGalleryLayout title={<h2 className="text-2xl font-semibold">All paintings</h2>}>
      <AllPaintingsGalleryGrid>
        {allPaintings.map((painting) => (
          <AllPaintingsGalleryItem key={painting.id} painting={painting} />
        ))}
      </AllPaintingsGalleryGrid>
    </AllPaintingsGalleryLayout>
  );
};
