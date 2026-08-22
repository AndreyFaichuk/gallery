import { ilike } from 'drizzle-orm';
import { searchTerms } from '../database';
import { db } from '../database';

type Options = {
  query: string;
};

export const getSuggestions = async ({ query }: Options) => {
  if (!query.trim()) return [];

  const result = await db
    .select({
      term: searchTerms.term,
    })
    .from(searchTerms)
    .where(ilike(searchTerms.term, `%${query}%`))
    .limit(10);

  return result.map((row) => row.term);
};
