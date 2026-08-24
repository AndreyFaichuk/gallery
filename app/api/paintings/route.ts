import { eq, ilike } from 'drizzle-orm';
import { type NextRequest, NextResponse } from 'next/server';
import { paintings as paintingsTable } from '@/services/database/schema';
import { getPaintings } from '@/services/gallery/get-paintings';
import { getSuggestions } from '@/services/gallery/get-suggestions';

export async function GET(req: NextRequest) {
  const { searchParams } = new URL(req.url);
  const query = searchParams.get('q');

  if (!query || query.length < 1) {
    return NextResponse.json([]);
  }

  const [suggestions, paintings] = await Promise.all([
    getSuggestions({ query }),
    getPaintings({
      conditions: [ilike(paintingsTable.name, `%${query}%`), eq(paintingsTable.isExclusive, false)],
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
