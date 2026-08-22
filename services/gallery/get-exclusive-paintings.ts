import { eq } from 'drizzle-orm';
import { paintings } from '../database';
import { db } from '../database';

export const getExclusivePaintings = async () =>
  db.select().from(paintings).where(eq(paintings.isExclusive, true));
