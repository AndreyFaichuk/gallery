'use client';

import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/app/components/ui';
import { CURRENCY_OPTIONS } from '@/constants';
import { type ExchangeRatesCurrency } from '@/utils/routeHandlers/getCurrencyExchange';
import { useEffect, useState } from 'react';
import { useLocalStorage } from 'usehooks-ts';

export const CurrencySellector = () => {
  const [isMounted, setIsMounted] = useState(false);

  const [currency, setCurrency] = useLocalStorage<ExchangeRatesCurrency>(
    'currency',
    CURRENCY_OPTIONS[0].value,
  );

  const handleSetCurrency = (currency?: ExchangeRatesCurrency) => {
    if (!currency) return;

    setCurrency(currency);
  };

  useEffect(() => {
    setIsMounted(true);
  }, []);

  const currentOption = CURRENCY_OPTIONS.find((option) => option.value === currency);

  return (
    <div className="w-[120px] absolute right-14">
      {isMounted && (
        <Select
          value={currency}
          onValueChange={(value) => handleSetCurrency(value as ExchangeRatesCurrency)}
        >
          <SelectTrigger className="w-full max-w-48">
            <SelectValue placeholder={currentOption?.label} />
          </SelectTrigger>
          <SelectContent
            side="bottom"
            align="end"
            sideOffset={8}
            avoidCollisions
            className="min-w-[20px]"
          >
            <SelectGroup>
              {CURRENCY_OPTIONS.map((option) => {
                return (
                  <SelectItem key={option.label} value={option.value}>
                    {option.label}
                  </SelectItem>
                );
              })}
            </SelectGroup>
          </SelectContent>
        </Select>
      )}
    </div>
  );
};
