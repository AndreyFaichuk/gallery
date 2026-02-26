import { type NextRequest, NextResponse } from 'next/server';
import getSuggestions from '@/utils/routeHandlers/getSuggestions';

export async function GET(req: NextRequest) {
  const { searchParams } = new URL(req.url);
  const query = searchParams.get('q');

  if (!query || query.length < 1) {
    return NextResponse.json([]);
  }

  const suggestions = await getSuggestions({ query });

  return NextResponse.json(suggestions);
}
