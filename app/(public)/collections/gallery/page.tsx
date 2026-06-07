import { PaintingsFilterBar } from '@/app/components/PaintingsFilterBar';
import type { PaintingsSearchParamsProps } from '@/types';
import { PaintingsGallery } from '@/app/components/PaintingsGallery';
import { getAllGalleryPaintings } from '@/utils/route-handlers/get-all-gallery-paintings';

const wait = () => new Promise((res) => setTimeout(() => res(1), 10000));

const Page = async ({ searchParams }: PaintingsSearchParamsProps) => {
  const { collections, availability, query, page, sort } = await searchParams;

  const { filters, allItems, totalCount, exchange, exclusiveItems } = await getAllGalleryPaintings({
    collectionId: collections,
    isAvailable: availability,
    page: page ? Number(page) : undefined,
    query,
    sort,
  });

  return (
    <div className="flex flex-col mt-10">
      <div className="flex justify-center">
        <div className="flex flex-col items-center gap-2 w-[350px]">
          <h1 className="text-3xl font-semibold">Gallery</h1>
          <span>
            A complete coolection of art, including exclusive paintings represented here and all
            paintings
          </span>
        </div>
      </div>
      <PaintingsFilterBar filters={filters} totalCount={totalCount}>
        <PaintingsGallery />
      </PaintingsFilterBar>
    </div>
  );
};

export default Page;
