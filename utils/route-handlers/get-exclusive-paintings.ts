import { eq } from 'drizzle-orm';
import { paintings } from '../db/schema';
import { db } from '../db/db';

export const getExclusivePaintings = async () =>
  db.select().from(paintings).where(eq(paintings.isExclusive, true));
