'use client';

import { FC } from 'react';
import { PaginationProps } from './types';
import { Button } from '@/app/components/ui';
import Link from 'next/link';

export const LoadMore: FC<PaginationProps> = ({ setPage, currentPage, totalPages }) => {
  if (currentPage === totalPages) return null;

  return (
    <div className="m-auto">
      <Button variant="outline" className="py-4 px-12 bg-transparent hover:bg-transparent" asChild>
        <Link href={setPage(currentPage + 1)} scroll={false}>
          Load more
        </Link>
      </Button>
    </div>
  );
};
