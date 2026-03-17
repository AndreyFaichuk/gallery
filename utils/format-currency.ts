import { BASE_CURRENCY, type ExchangeRatesCurrency } from './routeHandlers/getCurrencyExchange';

export const CURRENCY_SYMBOLS: Record<ExchangeRatesCurrency, string> = {
  [BASE_CURRENCY.USD]: '$',
  [BASE_CURRENCY.UAH]: '₴',
  [BASE_CURRENCY.EUR]: '€',
} as const;

type FormatCurrencyProps = {
  number: number;
  locale?: string;
  currency?: ExchangeRatesCurrency;
};

export const formatCurrency = ({
  number,
  locale = 'en-US',
  currency = BASE_CURRENCY.USD,
}: FormatCurrencyProps) => {
  const symbol = CURRENCY_SYMBOLS[currency];

  const formattedNumber = new Intl.NumberFormat(locale, {
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
  }).format(number);

  return `${symbol} ${formattedNumber} ${currency}`;
};
