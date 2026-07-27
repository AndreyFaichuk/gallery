'use client';

import type { ExchangeT, PaintingT } from '@/types';
import type { FC } from 'react';
import { PaintingCollectionItem } from './PaintingCollectionItem';

type PaintingsCollectionProps = ExchangeT & {
  items: PaintingT[];
};

export const PaintingsCollection: FC<PaintingsCollectionProps> = ({ exchange, items }) => {
  return (
    <div className="grid grid-cols-1 gap-x-4 gap-y-6 md:grid-cols-2 lg:grid-cols-3">
      {items.map((item) => (
        <PaintingCollectionItem key={item.id} item={item} exchange={exchange} />
      ))}
    </div>
  );
};
