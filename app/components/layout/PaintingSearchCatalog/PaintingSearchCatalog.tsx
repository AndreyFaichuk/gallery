'use client';

import type { PaintingT } from '@/types/schema-types';
import type { FC } from 'react';
import { PaintingItem } from '../../PaintingsCatalog/PaintingItem';
import { PAINTING_ITEM_VARIANT, type ExchangeT } from '@/types/painting-types';

type PaintingsCatalogProps = ExchangeT & {
  items: PaintingT[];
};

export const PaintingSearchCatalog: FC<PaintingsCatalogProps> = ({ items, exchange }) => {
  return (
    <div className="grid xl:grid-cols-4 gap-20 justify-items-center max-w-[90%] mx-auto">
      {items.map((item) => (
        <PaintingItem
          key={item.id}
          item={item}
          exchange={exchange}
          variant={PAINTING_ITEM_VARIANT.SEARCH}
        />
      ))}
    </div>
  );
};
