import { type NextRequest, NextResponse } from 'next/server';
import { ilike } from 'drizzle-orm';
import { paintings as paintingsTable } from '@/utils/db/schema';
import { getSuggestions } from '@/utils/route-handlers/get-suggestions';
import { getPaintings } from '@/utils/route-handlers/get-paintings';

export async function GET(req: NextRequest) {
  const { searchParams } = new URL(req.url);
  const query = searchParams.get('q');

  if (!query || query.length < 1) {
    return NextResponse.json([]);
  }

  const [suggestions, paintings] = await Promise.all([
    getSuggestions({ query }),
    getPaintings({
      conditions: [ilike(paintingsTable.name, `%${query}%`)],
      formattedSortParam: 'name',
      offset: 0,
      sortOrderAsc: true,
    }),
  ]);

  return NextResponse.json({
    suggestions,
    paintings,
  });
}
