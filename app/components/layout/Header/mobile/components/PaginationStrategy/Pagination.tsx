'use client';

import { FC } from 'react';
import {
  PaginationContent,
  PaginationItem,
  PaginationLink,
  PaginationPrevious,
  PaginationNext,
  PaginationEllipsis,
} from '../../../../../ui/pagination';
import { PaginationProps } from './types';

export const Pagination: FC<PaginationProps> = ({ totalPages, currentPage, setPage }) => {
  if (!totalPages) return null;

  return (
    <div className="flex justify-center mt-4">
      <PaginationContent>
        <PaginationItem>
          <PaginationPrevious
            className={currentPage <= 1 ? 'pointer-events-none opacity-50' : ''}
            href={setPage(Math.max(1, currentPage - 1))}
          />
        </PaginationItem>

        {[...Array(Math.min(3, totalPages))].map((_, i) => {
          const pageNumber = i + 1;
          return (
            <PaginationItem key={`page-${pageNumber}`}>
              <PaginationLink isActive={currentPage === pageNumber} href={setPage(pageNumber)}>
                {pageNumber}
              </PaginationLink>
            </PaginationItem>
          );
        })}

        {totalPages > 3 && <PaginationEllipsis />}

        {totalPages > 3 && (
          <PaginationItem>
            <PaginationLink isActive={currentPage === totalPages} href={setPage(totalPages)}>
              {totalPages}
            </PaginationLink>
          </PaginationItem>
        )}

        <PaginationItem>
          <PaginationNext
            className={currentPage >= totalPages ? 'pointer-events-none opacity-50' : ''}
            href={setPage(Math.min(totalPages, currentPage + 1))}
          />
        </PaginationItem>
      </PaginationContent>
    </div>
  );
};
