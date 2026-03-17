'use client';

import { Select, type SelectOption } from '@/app/components/ui/select';
import { CURRENCY_SYMBOLS } from '@/utils/format-currency';
import {
  BASE_CURRENCY,
  type ExchangeRatesCurrency,
} from '@/utils/routeHandlers/getCurrencyExchange';
import { useLocalStorage } from 'usehooks-ts';

export const CURRENCY_OPTIONS: SelectOption<ExchangeRatesCurrency>[] = [
  {
    value: BASE_CURRENCY.USD,
    label: `${CURRENCY_SYMBOLS[BASE_CURRENCY.USD]} ${BASE_CURRENCY.USD}`,
  },
  {
    value: BASE_CURRENCY.EUR,
    label: `${CURRENCY_SYMBOLS[BASE_CURRENCY.EUR]} ${BASE_CURRENCY.EUR}`,
  },
  {
    value: BASE_CURRENCY.UAH,
    label: `${CURRENCY_SYMBOLS[BASE_CURRENCY.UAH]} ${BASE_CURRENCY.UAH}`,
  },
];

export const CurrencySellector = () => {
  const [currency, setCurrency] = useLocalStorage<ExchangeRatesCurrency>(
    'currency',
    CURRENCY_OPTIONS[0].value,
  );

  const handleSetCurrency = (currency?: ExchangeRatesCurrency) => {
    if (!currency) return;

    setCurrency(currency);
  };

  const currentOption = CURRENCY_OPTIONS.find((option) => option.value === currency);

  return (
    <div className="w-[120px] absolute right-14">
      <Select
        instanceId="currency-select"
        value={currentOption}
        onChange={(option) => handleSetCurrency(option?.value)}
        options={CURRENCY_OPTIONS}
        isSearchable={false}
      />
    </div>
  );
};
