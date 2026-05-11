'use client';

import { useCurrency } from '@/hooks';
import { ExchangeT, PaintingT } from '@/types';
import { Button } from '../../ui/button';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger, Separator } from '../../ui';
import { formatDimension } from '@/utils';
import { useEffect, useRef, useState } from 'react';

type PaintingInfoMobileProps = ExchangeT & {
  painting: PaintingT;
};

export const PaintingInfoMobile: React.FC<PaintingInfoMobileProps> = ({ painting, exchange }) => {
  const { name, description, specifications, width, height, year } = painting;

  const contentRef = useRef<HTMLDivElement>(null);

  const [moreInfoValue, setMoreInfoValue] = useState('');

  const formattedPrice = useCurrency({ exchange, price: painting.price });

  useEffect(() => {
    if (!contentRef.current) return;

    contentRef.current.scrollIntoView({
      behavior: 'smooth',
      block: moreInfoValue ? 'start' : 'end',
    });
  }, [moreInfoValue]);

  return (
    <aside className="flex flex-col gap-4">
      <div className="flex flex-col gap-4">
        <span className="text-lg font-body">Juliette Bereziy Atelier</span>
        <h1 className="text-3xl font-body">{name}</h1>
        <span className="text-md">{formattedPrice ?? null}</span>
      </div>

      <Button size="lg">Add to cart</Button>

      <span className="font-body text-lg">Original painting by Juliette Bereziy</span>
      <Separator />

      <h1 className="font-body text-2xl">About the Artwork</h1>
      <span className="text-lg/7 font-body ">{description}</span>

      <span className="font-body text-lg">Love, </span>
      <span className="font-body text-lg">Juliette Bereziy</span>

      <div className="flex flex-col gap-4">
        <Accordion
          value={moreInfoValue}
          className="rounded-lg border p-2 border-border"
          type="single"
          collapsible
          onValueChange={setMoreInfoValue}
        >
          <AccordionItem value="item-1">
            <AccordionTrigger>More information</AccordionTrigger>
            <AccordionContent ref={contentRef} className="flex flex-col gap-4">
              <span className="text-lg/7 font-body">{specifications}</span>
              <span className="font-body text-lg">{formatDimension(width, height)}</span>
              <span>{year}</span>

              <span className="font-body text-lg">Worldwide shipping</span>
              <span className="text-lg/7 italic font-body">
                Please note that colors may vary slightly depending on lighting. Photos were taken
                in natural daylight by a window.
              </span>
            </AccordionContent>
          </AccordionItem>
        </Accordion>

        <Separator />
      </div>
    </aside>
  );
};
