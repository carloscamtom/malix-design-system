import React from 'react';

export type BadgeVariant = 'default' | 'primary' | 'success' | 'warning' | 'error';

export type BadgeProps = React.HTMLAttributes<HTMLSpanElement> & {
  variant?: BadgeVariant;
  dot?: boolean;
};

export function Badge({
  variant = 'default',
  dot = false,
  children,
  className,
  ...props
}: BadgeProps) {
  return (
    <span
      className={`malix-badge${className ? ` ${className}` : ''}`}
      data-variant={variant}
      {...props}
    >
      {dot ? <span className="malix-badge__dot" /> : null}
      <span className="malix-badge__label">{children}</span>
    </span>
  );
}
