import { eq } from 'drizzle-orm';
import { db, paintings } from '../database';

type Options = {
  id: string;
};

export const getPainting = async ({ id }: Options) => {
  const result = await db.select().from(paintings).where(eq(paintings.id, id)).limit(1);

  return result[0];
};
