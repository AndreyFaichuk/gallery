'use client';

import type { PaintingT } from '@/types';
import type { FC } from 'react';
import { ExclusiveWorks } from './components/ExclusiveWorks';
import { Separator } from '../ui';
import { AllPaintingsGallery } from './components/AllPaintingsGallery';

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
