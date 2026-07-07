import { CollectionsPreview } from '@/app/components/Collections/components/CollectionsPreview';
import { MoreCollections } from '@/app/components/Collections/components/MoreCollections';
import { CollectionsPreviewSkeleton } from '@/app/components/Skeletons';
import { Suspense } from 'react';

const Page = async () => {
  return (
    <section className="flex flex-col mt-4">
      <div className="flex justify-center mb-5">
        <div className="flex flex-col items-center gap-2 w-[350px]">
          <h1 className="text-3xl font-semibold">Collections</h1>
        </div>
      </div>

      <div className="flex flex-col gap-6">
        <Suspense fallback={<CollectionsPreviewSkeleton />}>
          <CollectionsPreview />
        </Suspense>
        <MoreCollections />
      </div>
    </section>
  );
};

export default Page;
