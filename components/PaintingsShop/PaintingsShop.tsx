'use client';

import type { FC, ReactNode } from 'react';
import type { ExchangeT, PaintingT } from '@/types';
import { PaintingShopItem } from './PaintingShopItem';

type PaintingsCatalogProps = ExchangeT & {
  items: PaintingT[];
};

type PaintingsShopGridProps = {
  children: ReactNode;
};

export const PaintingsShopGrid: FC<PaintingsShopGridProps> = ({ children }) => {
  return (
    <div className="grid xl:grid-cols-2 gap-20 justify-items-center max-w-[90%] mx-auto">
      {children}
    </div>
  );
};

export const PaintingsShop: FC<PaintingsCatalogProps> = ({ items, exchange }) => {
  return (
    <PaintingsShopGrid>
      {items.map((item) => (
        <PaintingShopItem key={item.id} item={item} exchange={exchange} />
      ))}
    </PaintingsShopGrid>
  );
};
