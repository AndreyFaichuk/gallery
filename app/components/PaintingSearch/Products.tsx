'use client';

import Image from 'next/image';
import Link from 'next/link';
import type { FC } from 'react';

export type Product = {
  logoUrl: string;
  name: string;
};

type ProductsProps = {
  products: Product[];
};

export const Products: FC<ProductsProps> = ({ products }) => {
  return (
    <div className="flex flex-col flex-1 px-3 py-2">
      <p className="text-xs text-muted-foreground">Products</p>
      <hr className="my-2" />
      <ul className="flex flex-col gap-1">
        {products.map((item) => {
          return (
            <li key={item.name} className="w-full rounded-md">
              <Link
                href={`/search?q=${item.name.toLocaleLowerCase()}`}
                className="block w-full px-3 py-2 hover:bg-gray-50 hover:underline hover:decoration-2 hover:underline-offset-2"
              >
                <div className="flex items-center gap-2">
                  <Image src={item.logoUrl} alt={item.name} width={50} height={60} unoptimized />
                  {item.name}
                </div>
              </Link>
            </li>
          );
        })}
      </ul>
    </div>
  );
};
