import { ExchangeT, PAINTING_ITEM_VARIANT, PaintingT } from '@/types';
import { FC } from 'react';
import { PaintingItem } from '../../PaintingsCatalog/PaintingItem';

type YouMayAlsoLikeMobile = ExchangeT & {
  paintings: PaintingT[];
};

export const YouMayAlsoLikeMobile: FC<YouMayAlsoLikeMobile> = ({ paintings, exchange }) => {
  return (
    <div className="flex flex-col justify-center gap-8">
      <h1 className="font-body text-2xl">You may also like</h1>
      <div className="flex gap-2">
        {paintings.map((painting) => (
          <PaintingItem
            key={painting.id}
            item={painting}
            exchange={exchange}
            variant={PAINTING_ITEM_VARIANT.ALSO_LIKE}
          />
        ))}
      </div>
    </div>
  );
};
