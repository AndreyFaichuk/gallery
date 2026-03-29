import { useCurrency } from '@/hooks/use-currency';
import type { ExchangeT } from '@/types/painting-types';
import type { PaintingT } from '@/types/schema-types';
import type { FC } from 'react';
import { Button } from '../ui/button';
import { formatDimension } from '@/utils';

type PaintingInfoProps = ExchangeT & {
  painting: PaintingT;
};

export const PaintingInfo: FC<PaintingInfoProps> = ({ painting, exchange }) => {
  const { name, description, specifications, width, height, year } = painting;

  const formattedPrice = useCurrency({ exchange, price: painting.price });

  return (
    <aside className="sticky top-9 w-1/3">
      <div className="flex flex-col gap-8">
        <div className="flex flex-col gap-4">
          <span className="font-body">Juliette Bereziy Atelier</span>
          <h1 className="text-4xl font-body">{name}</h1>
          <span className="text-lg">{formattedPrice ?? null}</span>

          <div className="w-1/2">
            <Button>Add to cart</Button>
          </div>
        </div>

        <span className="font-body text-lg">Original painting by Juliette Bereziy</span>
        <span className="text-lg/7 font-body ">{description}</span>
        <span className="text-lg/7 font-body">{specifications}</span>
        <span className="font-body text-lg">{formatDimension(width, height)}</span>
        <span>{year}</span>
        <span className="font-body text-lg">Worldwide shipping</span>
        <span className="text-lg/7 italic font-body">
          Please note that colors may vary slightly depending on lighting. Photos were taken in
          natural daylight by a window.
        </span>
        <span className="font-body text-lg">Love, </span>
        <span className="font-body text-lg">Juliette Bereziy</span>
      </div>
    </aside>
  );
};
