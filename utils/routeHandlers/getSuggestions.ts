import { eq, ilike } from 'drizzle-orm';
import { paintings } from '../db/schema';
import { db } from '../db/db';

type Options = {
  query: string;
};

const getSuggestions = async ({ query }: Options) => {
  const result = await db
    .select({
      name: paintings.name,
    })
    .from(paintings)
    .where(ilike(paintings.name, `%${query}%`))
    .limit(10);

  return result;
};

export default getSuggestions;
