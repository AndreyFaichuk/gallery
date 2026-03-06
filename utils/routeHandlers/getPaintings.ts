import { ilike } from 'drizzle-orm';
import { paintings } from '../db/schema';
import { db } from '../db/db';

type Options = {
  query: string;
};

const getPaintings = async ({ query }: Options) => {
  const result = await db
    .select()
    .from(paintings)
    .where(ilike(paintings.name, `%${query}%`));

  return result;
};

export default getPaintings;
