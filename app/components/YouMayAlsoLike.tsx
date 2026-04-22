import type { PaintingT } from '@/types/schema.types';
import type { FC } from 'react';
import { PaintingItem } from './PaintingsCatalog/PaintingItem';
import { PAINTING_ITEM_VARIANT, type ExchangeT } from '@/types';

type YouMayAlsoLikeProps = ExchangeT & {
  paintings: PaintingT[];
};

export const YouMayAlsoLike: FC<YouMayAlsoLikeProps> = ({ paintings, exchange }) => {
  return (
    <div className="col-start-1 xl:col-start-3 col-span-10 mt-20">
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
    </div>
  );
};
