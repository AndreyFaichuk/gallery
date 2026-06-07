import { CURRENCY_OPTIONS } from '@/constants';
import type { ExchangeT } from '@/types';
import { formatCurrency } from '@/utils';
import type { ExchangeRatesCurrency } from '@/utils/route-handlers/get-currency-exchange';
import { useEffect, useState } from 'react';
import { useLocalStorage } from 'usehooks-ts';

type useCurrencyProps = ExchangeT & {
  price: string;
};

export const useCurrency = ({ exchange, price }: useCurrencyProps) => {
  const [mounted, setMounted] = useState(false);
  const [currency] = useLocalStorage<ExchangeRatesCurrency>('currency', CURRENCY_OPTIONS[0].value);

  useEffect(() => {
    setMounted(true);
  }, []);

  const effectiveCurrency = mounted ? currency : null;

  const formattedPrice =
    effectiveCurrency !== null
      ? formatCurrency({
          number: Math.ceil(Number(price) * exchange[effectiveCurrency]),
          currency: effectiveCurrency,
        })
      : null;

  return formattedPrice;
};
