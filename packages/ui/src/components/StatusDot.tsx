import React from 'react';

export type StatusDotVariant = 'success' | 'warning' | 'error' | 'default';

export type StatusDotProps = React.HTMLAttributes<HTMLSpanElement> & {
  variant?: StatusDotVariant;
  label: string;
};

export function StatusDot({
  variant = 'default',
  label,
  className,
  ...props
}: StatusDotProps) {
  return (
    <span
      className={`malix-status-dot${className ? ` ${className}` : ''}`}
      data-variant={variant}
      {...props}
    >
      <span className="malix-status-dot__dot" aria-hidden="true" />
      <span className="malix-status-dot__label">{label}</span>
    </span>
  );
}
