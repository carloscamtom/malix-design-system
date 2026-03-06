import React from 'react';

export type BreadcrumbItem = {
  label: string;
  href?: string;
  icon?: React.ReactNode;
  active?: boolean;
};

export type BreadcrumbProps = React.HTMLAttributes<HTMLElement> & {
  items: BreadcrumbItem[];
  separator?: React.ReactNode;
};

const DefaultSeparator = () => (
  <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M6 3L11 8L6 13" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

export function Breadcrumb({ items, separator, className, ...props }: BreadcrumbProps) {
  return (
    <nav
      className={`malix-breadcrumb${className ? ` ${className}` : ''}`}
      aria-label="Breadcrumb"
      {...props}
    >
      {items.map((item, index) => {
        const isLast = index === items.length - 1;
        const isActive = item.active ?? isLast;

        return (
          <React.Fragment key={index}>
            <span className="malix-breadcrumb__item" data-active={isActive || undefined}>
              {item.icon ? (
                <span className="malix-breadcrumb__icon">{item.icon}</span>
              ) : null}
              {isActive || !item.href ? (
                <span className="malix-breadcrumb__label" aria-current={isActive ? 'page' : undefined}>
                  {item.label}
                </span>
              ) : (
                <a className="malix-breadcrumb__label" href={item.href}>
                  {item.label}
                </a>
              )}
            </span>
            {!isLast ? (
              <span className="malix-breadcrumb__separator" aria-hidden="true">
                {separator ?? <DefaultSeparator />}
              </span>
            ) : null}
          </React.Fragment>
        );
      })}
    </nav>
  );
}
