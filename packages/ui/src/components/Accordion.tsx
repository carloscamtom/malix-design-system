import React, { useState } from 'react';

export type AccordionProps = React.HTMLAttributes<HTMLDivElement> & {
  title: string;
  children: React.ReactNode;
  defaultOpen?: boolean;
  icon?: React.ReactNode;
};

export function Accordion({
  title,
  children,
  defaultOpen = false,
  icon,
  className,
  ...props
}: AccordionProps) {
  const [open, setOpen] = useState(defaultOpen);

  return (
    <div
      className={`malix-accordion${className ? ` ${className}` : ''}`}
      data-open={open}
      {...props}
    >
      <button
        type="button"
        className="malix-accordion__header"
        onClick={() => setOpen((prev) => !prev)}
        aria-expanded={open}
      >
        {icon ? <span className="malix-accordion__icon">{icon}</span> : null}
        <span className="malix-accordion__title">{title}</span>
        <svg
          className="malix-accordion__chevron"
          width="16"
          height="16"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          aria-hidden="true"
        >
          <polyline points="6 9 12 15 18 9" />
        </svg>
      </button>
      <div className="malix-accordion__body">{children}</div>
    </div>
  );
}
