'use client';

import Link from 'next/link';
import type { FC } from 'react';
import { Button } from '@/components/ui';
import type { PaginationProps } from './PaginationStrategy.types';

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
