'use client';

import type { PaintingT } from '@/types/schema.types';
import { Loader2 } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import { memo, type FC } from 'react';
import { PopoverClose } from '../ui/popover';
import { getMediaContentUrl } from '@/utils';

export type Product = {
  logoUrl: string;
  name: string;
};

type ProductsProps = {
  paintings: PaintingT[];
  isLoading: boolean;
};

const ProductsComponent: FC<ProductsProps> = ({ paintings, isLoading = false }) => {
  return (
    <div className="flex flex-col flex-1 px-3 py-2">
      <p className="text-xs text-muted-foreground">Products</p>
      <hr className="my-2" />

      {isLoading ? (
        <div className="flex items-center justify-center py-8 h-2.5">
          <Loader2 className="h-8 w-8 animate-spin" />
        </div>
      ) : (
        <ul className="flex flex-col gap-1">
          {paintings.map((item) => {
            const firstImageUrl = getMediaContentUrl(`${item.id}/${item.imageUrls[0]}`);

            return (
              <li key={item.name} className="w-full rounded-md">
                <PopoverClose asChild>
                  <Link
                    href={`/paintings/${item.id}`}
                    className="block w-full px-3 py-2 hover:bg-gray-50 hover:underline hover:decoration-2 hover:underline-offset-2"
                  >
                    <div className="flex items-center gap-2">
                      <Image src={firstImageUrl} alt={item.name} width={50} height={60} />
                      {item.name}
                    </div>
                  </Link>
                </PopoverClose>
              </li>
            );
          })}
        </ul>
      )}

      {!isLoading && !paintings.length && (
        <div className="flex justify-center">
          <p className="px-3 py-2 text-sm">No paintings</p>
        </div>
      )}
    </div>
  );
};

export const Products = memo(ProductsComponent);
