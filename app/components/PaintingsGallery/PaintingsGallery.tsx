'use client';

import { PaintingT } from '@/types';
import { FC } from 'react';
import { ExclusiveWorks } from './components/ExclusiveWorks';

type PaintingsGalleryProps = {
  allItems: PaintingT[];
  exclusiveItems: PaintingT[];
};

export const PaintingsGallery: FC<PaintingsGalleryProps> = ({ allItems, exclusiveItems }) => {
  return (
    <div className="flex">
      <ExclusiveWorks exclusiveItems={exclusiveItems} />
    </div>
  );
};
