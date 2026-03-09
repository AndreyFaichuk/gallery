'use client';

import type { PaintingT } from '@/types/schema-types';
import type { FC } from 'react';
import { PaintingItem } from './PaintingItem';

type PaintingsCatalogProps = {
  items: PaintingT[];
};

export const PaintingsCatalog: FC<PaintingsCatalogProps> = ({ items }) => {
  return (
    <div className="grid xl:grid-cols-2 gap-20 justify-items-center max-w-[90%] mx-auto">
      {items.map((item) => (
        <PaintingItem key={item.id} item={item} />
      ))}
    </div>
  );
};
