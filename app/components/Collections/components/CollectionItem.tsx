'use client';

import { cn } from '@/app/lib/utils';
import { CollectionT } from '@/types';
import { getMediaContentUrl } from '@/utils';
import { ArrowRight } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import { FC } from 'react';

type CollectionItemProps = {
  collection: CollectionT;
  className?: string;
  imageClassName?: string;
};

export const CollectionItem: FC<CollectionItemProps> = ({
  collection,
  className,
  imageClassName,
}) => {
  const image = getMediaContentUrl(`collections/${collection.id}/${collection.imageUrls[0]}`);

  return (
    <Link
      href={`/collections/${collection.id}`}
      className={cn(
        'group relative min-h-[114px] overflow-hidden rounded-lg text-white md:min-h-0 md:aspect-auto',
        className,
      )}
    >
      <Image
        fill
        src={image}
        alt={collection.name}
        className={cn(
          'object-cover transition-transform duration-500 group-hover:scale-[2.3] md:group-hover:scale-[2.1]',
          imageClassName,
        )}
      />
      <div className="absolute inset-0 bg-gradient-to-b from-black/10 via-black/20 to-black/82" />
      <div className="relative gap-2 flex h-full min-h-[100px] flex-col justify-end px-5 pb-4 pt-10 md:min-h-[180px] md:px-6 md:pb-7 lg:min-h-[187px] lg:px-6">
        <h2 className="text-lg font-medium text-white">{collection.name}</h2>

        {collection.description && (
          <p className="mt-2 max-w-[210px] whitespace-pre-line leading-[1.75] md:max-w-[230px] md:text-[13px] text-xs font-normal text-white">
            {collection.description}
          </p>
        )}

        <div className="mt-3 flex items-center gap-2 md:mt-5">
          <span className="font-sans text-[11px] font-semibold uppercase tracking-[0.14em]">
            Explore collection
          </span>
          <ArrowRight className="size-4" />
        </div>
      </div>
    </Link>
  );
};
