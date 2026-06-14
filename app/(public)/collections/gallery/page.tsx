import { PaintingsFilterBar } from '@/app/components/PaintingsFilterBar';
import type { PaintingsSearchParamsProps } from '@/types';
import { PaintingsGallery } from '@/app/components/PaintingsGallery';
import { getAllGalleryPaintings } from '@/utils/route-handlers/get-all-gallery-paintings';
import { ALL_PAINTINGS_API_MODE } from '@/utils/route-handlers/types/filter-options.type';

const wait = () => new Promise((res) => setTimeout(() => res(1), 3000));

const Page = async ({ searchParams }: PaintingsSearchParamsProps) => {
  const { collections, availability, query, page, sort } = await searchParams;

  const { filters, allItems, totalCount, exchange, exclusiveItems } = await getAllGalleryPaintings({
    collectionId: collections,
    isAvailable: availability,
    page: page ? Number(page) : undefined,
    query,
    sort,
    mode: ALL_PAINTINGS_API_MODE.LOAD_MORE,
  });

  return (
    <div className="flex flex-col mt-4">
      <div className="flex justify-center mb-5">
        <div className="flex flex-col items-center gap-2 w-[350px]">
          <h1 className="text-3xl font-semibold">Gallery</h1>
          <span>A complete coolection of art</span>
        </div>
      </div>

      <PaintingsFilterBar
        filters={filters}
        totalCount={totalCount}
        variant={ALL_PAINTINGS_API_MODE.LOAD_MORE}
      >
        <PaintingsGallery allItems={allItems} exclusiveItems={exclusiveItems} />
      </PaintingsFilterBar>
    </div>
  );
};

export default Page;
