import { PaintingsFilterBar } from '@/app/components/PaintingsFilterBar';
import type { PaintingsSearchParamsProps } from '@/types';
import getAllPaintings from '@/utils/routeHandlers/getAllPaintings';
import { PaintingsGallery } from '@/app/components/PaintingsGallery';

const wait = () => new Promise((res) => setTimeout(() => res(1), 10000));

const Page = async ({ searchParams }: PaintingsSearchParamsProps) => {
  const { collections, availability, query, page, sort } = await searchParams;

  const { filters, items, totalCount, exchange } = await getAllPaintings({
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
