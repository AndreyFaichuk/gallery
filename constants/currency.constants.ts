import { CURRENCY_SYMBOLS } from '@/utils';
import { BASE_CURRENCY } from '@/utils/route-handlers/get-currency-exchange';

export const CURRENCY_OPTIONS = [
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
