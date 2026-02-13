import React from 'react';

export type ButtonHierarchy = 'primary' | 'secondary' | 'ghost';
export type ButtonVariant = 'text' | 'leading-icon-text' | 'icon-only' | 'icon-badge';

export type ButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement> & {
  hierarchy?: ButtonHierarchy;
  variant?: ButtonVariant;
  icon?: React.ReactNode;
  badge?: React.ReactNode;
  loading?: boolean;
  label?: string;
};

export function Button({
  hierarchy = 'primary',
  variant = 'text',
  icon,
  badge,
  loading = false,
  disabled,
  children,
  label,
  ...props
}: ButtonProps) {
  const isDisabled = disabled || loading;
  const isIconOnly = variant === 'icon-only';

  return (
    <button
      type="button"
      className="malix-button"
      data-hierarchy={hierarchy}
      data-variant={variant}
      data-loading={loading}
      disabled={isDisabled}
      aria-busy={loading || undefined}
      aria-label={isIconOnly ? label : props['aria-label']}
      {...props}
    >
      {icon ? <span className="malix-button__icon">{icon}</span> : null}
      {!isIconOnly ? <span>{loading ? 'Loading...' : children}</span> : null}
      {variant === 'icon-badge' && badge ? <span className="malix-button__badge">{badge}</span> : null}
      {isIconOnly && !icon ? <span>{loading ? '...' : label}</span> : null}
    </button>
  );
}
