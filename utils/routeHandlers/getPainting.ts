import { eq, ilike } from 'drizzle-orm';
import { paintings } from '../db/schema';
import { db } from '../db/db';
import { NextResponse } from 'next/server';
import * as Sentry from '@sentry/nextjs';

type Options = {
  id: string;
};

const getPainting = async ({ id }: Options) => {
  try {
    throw new Error('Sentry server test error');
  } catch (error) {
    Sentry.captureException(error);

    await Sentry.flush(2000);

    return NextResponse.json(
      { ok: false, message: 'Sentry server test sent!!!!!!!' },
      { status: 500 },
    );
  }

  // const result = await db.select().from(paintings).where(eq(paintings.id, id)).limit(1);

  // return result[0];
};

export default getPainting;
