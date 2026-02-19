import React from 'react';

export type SelectGroupProps = React.HTMLAttributes<HTMLDivElement> & {
  label?: string;
  helperText?: string;
  error?: boolean;
};

export function SelectGroup({
  label,
  helperText,
  error,
  children,
  className,
  ...props
}: SelectGroupProps) {
  return (
    <div
      className={`malix-select-group${className ? ` ${className}` : ''}`}
      data-error={error || undefined}
      {...props}
    >
      {label ? (
        <span className="malix-select-group__label">{label}</span>
      ) : null}
      {children}
      {helperText ? (
        <span className="malix-select-group__helper">{helperText}</span>
      ) : null}
    </div>
  );
}
