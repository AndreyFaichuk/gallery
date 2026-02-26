import { eq } from 'drizzle-orm';
import { paintings } from '../db/schema';
import { db } from '../db/db';

const getAllPaintings = async () => {
  return await db.select().from(paintings);
};

export default getAllPaintings;
