'use client';

import type { FC } from 'react';
import type { PaintingT } from '@/types';
import { Separator } from '../ui';
import { AllPaintingsGallery } from './components/AllPaintingsGallery';
import { ExclusiveWorks } from './components/ExclusiveWorks';

type PaintingsGalleryProps = {
  allItems: PaintingT[];
  exclusiveItems: PaintingT[];
};

export const PaintingsGallery: FC<PaintingsGalleryProps> = ({ allItems, exclusiveItems }) => {
  return (
    <div className="flex flex-col gap-4">
      <ExclusiveWorks exclusiveItems={exclusiveItems} />

      <Separator />

      <AllPaintingsGallery allPaintings={allItems} />
    </div>
  );
};
