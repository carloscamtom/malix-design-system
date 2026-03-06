import React from 'react';

export type PillVariant = 'default' | 'primary' | 'success' | 'error' | 'warning' | 'info';

export type PillProps = React.HTMLAttributes<HTMLSpanElement> & {
  variant?: PillVariant;
};

export function Pill({ variant = 'default', children, className, ...props }: PillProps) {
  return (
    <span
      className={`malix-pill${className ? ` ${className}` : ''}`}
      data-variant={variant}
      {...props}
    >
      {children}
    </span>
  );
}
