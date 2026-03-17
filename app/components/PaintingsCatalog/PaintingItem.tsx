'use client';

import type { PaintingT } from '@/types/schema-types';
import getImageUrl from '@/utils/get-image-url';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { useEffect, useState, type FC } from 'react';
import { useLocalStorage } from 'usehooks-ts';
import { CURRENCY_OPTIONS } from '../layout/Header/components/CurrencySellector';
import { formatCurrency } from '@/utils/format-currency';
import type { ExchangeRatesCurrency } from '@/utils/routeHandlers/getCurrencyExchange';

type PaintingItemProps = {
  item: PaintingT;
  exchange: {
    EUR: number;
    UAH: number;
    USD: number;
  };
};

const formatPaintingPrice = (price: number, currency: ExchangeRatesCurrency) =>
  formatCurrency({
    number: price,
    currency,
  });

export const PaintingItem: FC<PaintingItemProps> = ({ item, exchange }) => {
  const [mounted, setMounted] = useState(false);
  const [currency] = useLocalStorage<ExchangeRatesCurrency>('currency', CURRENCY_OPTIONS[0].value);

  useEffect(() => {
    setMounted(true);
  }, []);

  const firstImage = getImageUrl(`${item.id}/${item.images[0]}`);
  const secondImage = getImageUrl(`${item.id}/${item.images[1]}`);

  const effectiveCurrency = mounted ? currency : null;

  const formattedPrice =
    effectiveCurrency !== null
      ? formatPaintingPrice(
          Math.ceil(Number(item.price) * exchange[effectiveCurrency]),
          effectiveCurrency,
        )
      : null;

  return (
    <motion.div
      className="max-w-[600px] w-full flex flex-col gap-4 cursor-pointer group"
      initial="rest"
      whileHover="hover"
      animate="rest"
    >
      <div className="relative overflow-hidden">
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
            alt="painting"
            width={600}
            height={600}
            className="w-full h-auto"
          />
        </motion.div>

        <motion.div
          variants={{
            rest: { opacity: 0, scale: 1 },
            hover: { opacity: 1, scale: 1.05 },
          }}
          transition={{ duration: 0.35 }}
        >
          <Image
            src={secondImage}
            alt="painting hover"
            width={600}
            height={600}
            className="w-full h-auto"
            loading="lazy"
          />
        </motion.div>
      </div>

      <div className="flex flex-col gap-2">
        <h3 className="transition group-hover:opacity-70 group-hover:underline decoration-1">
          {item.name}
        </h3>
        {formattedPrice ?? null}
      </div>
    </motion.div>
  );
};
