import { eq } from 'drizzle-orm';
import { db, paintings } from '../database';

export const getExclusivePaintings = async () =>
  db.select().from(paintings).where(eq(paintings.isExclusive, true));
