import { PaintingsFilterBar } from '@/components/PaintingsFilterBar';
import { PaintingsShop } from '@/components/PaintingsShop';
import { getAllShopPaintings } from '@/services/gallery/get-all-shop-paintings';
import type { PaintingsSearchParamsProps } from '@/types';

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
    <div className="mt-6">
      <PaintingsFilterBar filters={filters} totalCount={totalCount}>
        <PaintingsShop items={items} exchange={exchange} />
      </PaintingsFilterBar>
    </div>
  );
};

export default Page;
