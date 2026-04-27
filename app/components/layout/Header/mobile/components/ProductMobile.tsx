import { Product } from '@/app/components/SuggestionsAndProductsAll/Products';
import { PaintingT } from '@/types';
import { ChevronRight } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import { FC } from 'react';

type ProductMobile = {
  painting: Pick<PaintingT, 'id' | 'name'>;
  previewImagUrl: string;
};

export const ProductMobile: FC<ProductMobile> = ({ painting, previewImagUrl }) => {
  return (
    <Link href={`/paintings/${painting.id}`} className="block w-full">
      <div className="flex items-center gap-4 justify-between">
        <div className="flex gap-4 items-center">
          <Image
            className="rounded-sm"
            src={previewImagUrl}
            alt={painting.name}
            width={140}
            height={150}
          />
          <span className="font-medium">{painting.name}</span>
        </div>
        <ChevronRight className="size-4" />
      </div>
    </Link>
  );
};
