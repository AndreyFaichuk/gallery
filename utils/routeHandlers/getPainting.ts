import { eq } from 'drizzle-orm';
import { paintings } from '../db/schema';
import { db } from '../db/db';

type Options = {
  id: string;
};

const getPainting = async ({ id }: Options) => {
  const result = await db.select().from(paintings).where(eq(paintings.id, id)).limit(1);

  return result[0];
};

export default getPainting;
