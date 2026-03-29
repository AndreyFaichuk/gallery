import { ilike } from 'drizzle-orm';
import { searchTerms } from '../db/schema';
import { db } from '../db/db';

type Options = {
  query: string;
};

const getSuggestions = async ({ query }: Options) => {
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

export default getSuggestions;
