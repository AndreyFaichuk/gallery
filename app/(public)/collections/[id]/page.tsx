import { CollectionPreview } from '@/app/components/Collections/components';
import { MoreCollections } from '@/app/components/Collections/components/MoreCollections';
import { PaintingsCollection } from '@/app/components/PaintingsCollection';
import { PaintingsFilterBar } from '@/app/components/PaintingsFilterBar';
import { FILTER_OPTION_PARAMS, PaintingPageParams, PaintingsSearchParamsProps } from '@/types';
import { getAllShopPaintings } from '@/utils/route-handlers/get-all-shop-paintings';
import { Suspense } from 'react';

type PageProps = PaintingsSearchParamsProps & PaintingPageParams;

const Page = async ({ params, searchParams }: PageProps) => {
  const { id } = await params;
  const { availability, page, sort } = await searchParams;

  const { filters, items, totalCount, exchange } = await getAllShopPaintings({
    collectionId: id,
    isAvailable: availability,
    page: page ? Number(page) : undefined,
    sort,
  });

  const omitCollectionFilter = filters.filter(
    (filter) => filter.param !== FILTER_OPTION_PARAMS.COLLECTIONS,
  );

  return (
    <section className="flex flex-col">
      <div className="flex flex-col gap-6">
        <div className="flex flex-col gap-6">
          <Suspense fallback={<span>Loading collection...</span>}>
            <CollectionPreview id={id} />
          </Suspense>
        </div>
        <PaintingsFilterBar filters={omitCollectionFilter} totalCount={totalCount}>
          <PaintingsCollection items={items} exchange={exchange} />
        </PaintingsFilterBar>
        <MoreCollections />
      </div>
    </section>
  );
};

export default Page;
