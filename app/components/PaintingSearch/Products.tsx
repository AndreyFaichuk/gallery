'use client';

import type { PaintingT } from '@/types/schema-types';
import { Loader2 } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import { memo, type FC } from 'react';

export type Product = {
  logoUrl: string;
  name: string;
};

type ProductsProps = {
  products: PaintingT[];
  isLoading: boolean;
};

export const Products: FC<ProductsProps> = memo(({ products, isLoading = false }) => {
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
          {products.map((item) => {
            return (
              <li key={item.name} className="w-full rounded-md">
                <Link
                  href={`/search?q=${item.name.toLocaleLowerCase()}`}
                  className="block w-full px-3 py-2 hover:bg-gray-50 hover:underline hover:decoration-2 hover:underline-offset-2"
                >
                  <div className="flex items-center gap-2">
                    <Image src={item.images[0]} alt={item.name} width={50} height={60} />
                    {item.name}
                  </div>
                </Link>
              </li>
            );
          })}
        </ul>
      )}

      {!isLoading && !products.length && (
        <div className="flex justify-center">
          <p className="px-3 py-2 text-sm">No products</p>
        </div>
      )}
    </div>
  );
});
