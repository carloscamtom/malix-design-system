import React from 'react';

export type PaginationVariant = 'full' | 'mini';

export type PaginationProps = {
  currentPage: number;
  totalPages: number;
  onPageChange: (page: number) => void;
  variant?: PaginationVariant;
  className?: string;
};

function ChevronLeft() {
  return (
    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden="true">
      <path d="M10 12L6 8L10 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

function ChevronRight() {
  return (
    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden="true">
      <path d="M6 4L10 8L6 12" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

export function Pagination({
  currentPage,
  totalPages,
  onPageChange,
  variant = 'full',
  className,
}: PaginationProps) {
  const isFirstPage = currentPage <= 1;
  const isLastPage = currentPage >= totalPages;

  const pages = Array.from({ length: totalPages }, (_, i) => i + 1);

  return (
    <nav
      className={`malix-pagination${className ? ` ${className}` : ''}`}
      data-variant={variant}
      aria-label="Pagination"
    >
      <button
        type="button"
        className="malix-pagination__arrow"
        data-disabled={isFirstPage || undefined}
        disabled={isFirstPage}
        onClick={() => onPageChange(currentPage - 1)}
        aria-label="Previous page"
      >
        <ChevronLeft />
      </button>

      {variant === 'full' ? (
        pages.map((page) => (
          <button
            key={page}
            type="button"
            className="malix-pagination__item"
            data-active={page === currentPage || undefined}
            aria-current={page === currentPage ? 'page' : undefined}
            onClick={() => onPageChange(page)}
          >
            {page}
          </button>
        ))
      ) : (
        <span className="malix-pagination__label">
          {currentPage} of {totalPages}
        </span>
      )}

      <button
        type="button"
        className="malix-pagination__arrow"
        data-disabled={isLastPage || undefined}
        disabled={isLastPage}
        onClick={() => onPageChange(currentPage + 1)}
        aria-label="Next page"
      >
        <ChevronRight />
      </button>
    </nav>
  );
}
