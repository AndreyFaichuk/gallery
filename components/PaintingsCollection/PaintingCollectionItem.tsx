'use client';

import { useCurrency } from '@/hooks';
import type { ExchangeT, PaintingT } from '@/types';
import { getMediaContentUrl } from '@/utils';
import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import type { FC } from 'react';

type PaintingCollectionItemProps = ExchangeT & {
  item: PaintingT;
};

export const PaintingCollectionItem: FC<PaintingCollectionItemProps> = ({ exchange, item }) => {
  const formattedPrice = useCurrency({ exchange, price: item.price });

  const firstImage = getMediaContentUrl(`paintings/${item.id}/${item.imageUrls[0]}`);
  const secondImage = getMediaContentUrl(
    `paintings/${item.id}/${item.imageUrls[1] ?? item.imageUrls[0]}`,
  );
  const dimensions = `${item.width} x ${item.height} cm`;
  const medium = 'Oil on canvas';

  return (
    <Link href={`/paintings/${item.id}`} className="block">
      <motion.article
        initial="rest"
        animate="rest"
        whileHover="hover"
        className="group flex w-full flex-col"
      >
        <div className="relative aspect-[13/10] overflow-hidden rounded-md md:aspect-[9/4] lg:aspect-[7/4]">
          <motion.div
            variants={{
              rest: { opacity: 1, scale: 1 },
              hover: { opacity: 0, scale: 1.05 },
            }}
            transition={{ duration: 0.35 }}
            className="absolute inset-0"
          >
            <Image
              src={firstImage}
              alt={item.name}
              fill
              sizes="(max-width: 767px) calc(100vw - 32px), (max-width: 1023px) calc(50vw - 40px), calc(33vw - 48px)"
              className="object-cover"
            />
          </motion.div>

          <motion.div
            variants={{
              rest: { opacity: 0, scale: 1 },
              hover: { opacity: 1, scale: 1.05 },
            }}
            transition={{ duration: 0.35 }}
            className="absolute inset-0"
          >
            <Image
              src={secondImage}
              alt=""
              fill
              sizes="(max-width: 767px) calc(100vw - 32px), (max-width: 1023px) calc(50vw - 40px), calc(33vw - 48px)"
              className="object-cover"
              loading="lazy"
            />
          </motion.div>
        </div>

        <div className="pt-4 md:pt-1.5">
          <h3 className="text-base leading-tight transition-opacity group-hover:opacity-70">
            {item.name}
          </h3>

          <div className="mt-1.5 flex flex-wrap items-center text-sm leading-tight text-foreground/65 md:grid md:grid-cols-[1fr_auto] md:gap-y-1">
            <span aria-hidden className="mx-2 md:hidden">
              •
            </span>
            <span>{dimensions}</span>
            <span className="mt-3 basis-full text-base text-foreground md:mt-0 md:basis-auto md:justify-self-end md:text-sm">
              {formattedPrice}
            </span>
          </div>
        </div>
      </motion.article>
    </Link>
  );
};
