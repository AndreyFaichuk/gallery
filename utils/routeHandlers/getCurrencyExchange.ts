import { desc } from 'drizzle-orm';
import { exchangeRates } from '../db/schema';
import { db } from '../db/db';
import { z } from 'zod';
import { DateTime } from 'luxon';

export const exchangeRatesSchema = z.object({
  disclaimer: z.string(),
  license: z.string(),
  timestamp: z.number().int().positive(),
  base: z.enum(['USD', 'EUR', 'UAH']),
  rates: z.object({
    USD: z.number(),
    EUR: z.number(),
    UAH: z.number(),
  }),
});

const DAYS_LIMIT = 1;

const getDiffInDaysSinceLastFetch = (fetchedAt?: Date): number => {
  if (!fetchedAt) return DAYS_LIMIT;

  return Math.floor(DateTime.now().diff(DateTime.fromJSDate(fetchedAt), 'days').days);
};

export type ExchangeRatesResponse = z.infer<typeof exchangeRatesSchema>;

const currencyExchangeUrl = 'https://openexchangerates.org/api';

const getCurrencyExchange = async () => {
  const [existingExchangeRate] = await db
    .select()
    .from(exchangeRates)
    .limit(1)
    .orderBy(desc(exchangeRates.fetchedAt));

  const diffInDaysSinceLastFetch = getDiffInDaysSinceLastFetch(existingExchangeRate.fetchedAt);

  if (!existingExchangeRate || diffInDaysSinceLastFetch >= DAYS_LIMIT) {
    const response = await fetch(
      `${currencyExchangeUrl}/latest.json?app_id=${process.env.CURRENCY_EXCHANGE_API_KEY}&symbols=UAH,EUR,USD`,
    );

    const res: ExchangeRatesResponse = await response.json();

    const isResponseValid = exchangeRatesSchema.safeParse(res);

    if (!isResponseValid.success)
      throw new Error('There was an incorrect response format from the currecy exhange service');

    const { EUR, UAH, USD } = res.rates;

    await db.insert(exchangeRates).values({
      id: crypto.randomUUID(),
      fetchedAt: DateTime.now().toJSDate(),
      EUR,
      UAH,
      USD,
    });

    return res.rates;
  }

  const { EUR, UAH, USD } = existingExchangeRate;

  return { EUR, UAH, USD };
};

export default getCurrencyExchange;
