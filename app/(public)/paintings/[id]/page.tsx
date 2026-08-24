import { PaintingPage } from '@/components/PaintingPage';
import type { PaintingPageParams } from '@/types';
import { getPainting } from '@/services/gallery/get-painting';
import { getYouMayAlsoLikePaintings } from '@/services/gallery/get-you-may-also-like-paintings';
import { redirect } from 'next/navigation';

const exchange = { EUR: 0.872334, UAH: 44.09512, USD: 1 };

const Page = async ({ params }: PaintingPageParams) => {
  const { id } = await params;

  const painting = await getPainting({ id });

  if (!painting?.collectionId) return redirect('/');

  const youMayAlsoLikePaintings = await getYouMayAlsoLikePaintings({
    collectionId: painting.collectionId,
    excludePaintingId: painting.id,
  });

  return (
    <PaintingPage
      exchange={exchange}
      painting={painting}
      youMayAlsoLikePaintings={youMayAlsoLikePaintings}
    />
  );
};

export default Page;
