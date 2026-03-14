'use client';

import { Select, type SelectOption } from '@/app/components/ui/select';
import { useLocalStorage } from 'usehooks-ts';

export const CURRENCY_OPTIONS: SelectOption[] = [
  { value: 'USD', label: '$ USD' },
  { value: 'EUR', label: '€ EUR' },
  { value: 'UAH', label: '₴ UAH' },
];

export const CurrencySellector = () => {
  const [currency, setCurrency] = useLocalStorage('currency', CURRENCY_OPTIONS[0].value);

  const handleSetCurrency = (currency?: string) => {
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
