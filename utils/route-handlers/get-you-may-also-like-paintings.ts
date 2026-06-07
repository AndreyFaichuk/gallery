import { and, eq, ne } from 'drizzle-orm';
import { db } from '../db/db';
import { paintings } from '../db/schema';

type Options = {
  collectionId: string;
  excludePaintingId: string;
};

export const getYouMayAlsoLikePaintings = async ({ collectionId, excludePaintingId }: Options) =>
  db
    .select()
    .from(paintings)
    .where(and(eq(paintings.collectionId, collectionId), ne(paintings.id, excludePaintingId)))
    .limit(4);
