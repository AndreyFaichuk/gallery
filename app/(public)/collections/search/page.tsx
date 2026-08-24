import { PaintingSearchCatalog } from '@/components/PaintingSearchCatalog';
import { PaintingsFilterBar } from '@/components/PaintingsFilterBar';
import type { PaintingsSearchParamsProps } from '@/types';
import { getAllShopPaintings } from '@/services/gallery/get-all-shop-paintings';

const Page = async ({ searchParams }: PaintingsSearchParamsProps) => {
  const { collections, availability, query, page, sort } = await searchParams;

  const { filters, items, totalCount, exchange } = await getAllShopPaintings({
    collectionId: collections,
    isAvailable: availability,
    page: page ? Number(page) : undefined,
    query,
    sort,
  });

  return (
    <PaintingsFilterBar filters={filters} totalCount={totalCount}>
      <PaintingSearchCatalog items={items} exchange={exchange} />
    </PaintingsFilterBar>
  );
};

export default Page;
