'use client';

import type { PaintingT } from '@/types/schema.types';
import Image from 'next/image';
import { memo, type FC } from 'react';
import { useRouter } from 'next/navigation';
import { CommandItem } from '../ui';
import { getMediaContentUrl } from '@/utils';
import { ProductsSkeleton } from '../Skeletons';

type ProductsProps = {
  paintings: PaintingT[];
  isLoading: boolean;
  onClose: VoidFunction;
};

const ProductsComponent: FC<ProductsProps> = ({ paintings, isLoading = false, onClose }) => {
  const router = useRouter();

  if (isLoading) {
    return <ProductsSkeleton />;
  }

  return (
    <div className="flex flex-col flex-1 px-3 py-2">
      <p className="text-xs text-muted-foreground">Products</p>

      <hr className="my-2" />

      <>
        {paintings.map((item) => {
          const firstImageUrl = getMediaContentUrl(`${item.id}/${item.imageUrls[0]}`);

          return (
            <CommandItem
              key={item.id}
              value={item.name}
              onSelect={() => {
                router.push(`/paintings/${item.id}`);
                onClose();
              }}
              className="rounded-md px-3 py-2 cursor-pointer data-[selected=true]:bg-gray-50"
            >
              <div className="flex items-center gap-2">
                <Image
                  src={firstImageUrl}
                  alt={item.name}
                  width={50}
                  height={60}
                  className="h-[60px] w-[50px] shrink-0 object-cover"
                />

                <span>{item.name}</span>
              </div>
            </CommandItem>
          );
        })}
      </>

      {!isLoading && !paintings.length && (
        <div className="flex justify-center">
          <p className="px-3 py-2 text-sm">No paintings</p>
        </div>
      )}
    </div>
  );
};

export const Products = memo(ProductsComponent);
