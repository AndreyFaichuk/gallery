import {
  PaginationContent,
  PaginationItem,
  PaginationLink,
  PaginationPrevious,
  PaginationNext,
  PaginationEllipsis,
} from './ui/pagination';

type PaginationProps = {
  totalPages: number;
  setPage: (currentPage: number) => string;
  currentPage: number;
};

export const Pagination = ({ totalPages, currentPage, setPage }: PaginationProps) => {
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
