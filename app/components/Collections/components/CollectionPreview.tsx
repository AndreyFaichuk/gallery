import { getMediaContentUrl } from '@/utils';
import { getCollectionById } from '@/utils/route-handlers';
import { ArrowRight, Asterisk } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';

type CollectionPreviewProps = {
  id: string;
};

export const CollectionPreview = async ({ id }: CollectionPreviewProps) => {
  const collection = await getCollectionById({ id });

  const imageUrl = getMediaContentUrl(`collections/${collection.id}/${collection.imageUrls[0]}`);

  return (
    <div className="relative -mx-4 h-[400px] xs:h-[700px] sm:-mx-6 md:-mx-8 lg:-mx-12 xl:-mx-20 2xl:-mx-60">
      <Image src={imageUrl} alt={collection.name} fill className="object-cover" />

      <div
        className="absolute inset-0 xs:hidden"
        style={{
          background: '#f5f0ea',
        }}
      />

      <div
        className="absolute inset-0 hidden xs:block"
        style={{
          background:
            'linear-gradient(86deg, #f5f0ea 29%, rgba(245,240,234,0.6) 38%, transparent 45%)',
        }}
      />

      <div className="absolute inset-y-0 left-0 flex flex-col items-center justify-between gap-0 px-4 py-10 text-center text-[#6f594c] xs:inset-0 xs:w-auto xs:items-stretch xs:gap-6 xs:px-4 xs:py-24 xs:text-left xs:text-black sm:px-6 md:px-8 lg:px-12 xl:px-20 2xl:px-60">
        <h3 className="text-md whitespace-nowrap xs:whitespace-normal">
          Collections / {collection.name}
        </h3>
        <h1 className="text-[32px] leading-9 whitespace-nowrap xs:text-4xl xs:leading-10 xs:whitespace-normal">
          {collection.name}
        </h1>

        <div className="flex w-full items-center justify-center gap-2 xs:justify-start">
          <div className="h-px w-12 bg-neutral-300 xs:hidden" />
          <Asterisk className="size-4 text-[#8d7460] xs:size-6 xs:text-neutral-700" />
          <div className="h-px w-12 bg-neutral-300 xs:w-16" />
        </div>

        <div className="w-full xs:max-w-[400px]">
          <p className="text-lg">{collection.description}</p>
        </div>

        <Link
          href="/collections"
          className="flex w-full items-center justify-center gap-2 font-normal text-[#6f594c] xs:max-w-[200px] xs:justify-start xs:font-semibold xs:text-neutral-700"
        >
          Back to all collections <ArrowRight className="h-4 w-4" />
        </Link>
      </div>
    </div>
  );
};
