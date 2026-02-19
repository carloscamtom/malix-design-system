import React from 'react';

export type InputGroupProps = React.InputHTMLAttributes<HTMLInputElement> & {
  label?: string;
  helperText?: string;
  leadingIcon?: React.ReactNode;
  error?: boolean;
};

export function InputGroup({
  label,
  helperText,
  leadingIcon,
  error,
  id,
  className,
  ...props
}: InputGroupProps) {
  const inputId = id || `input-${React.useId()}`;

  return (
    <div className={`malix-input-group${className ? ` ${className}` : ''}`} data-error={error || undefined}>
      {label ? (
        <label htmlFor={inputId} className="malix-input-group__label">
          {label}
        </label>
      ) : null}
      <div className="malix-input-group__field">
        {leadingIcon ? <span className="malix-input-group__icon">{leadingIcon}</span> : null}
        <input id={inputId} className="malix-input" {...props} />
      </div>
      {helperText ? (
        <span className="malix-input-group__helper">{helperText}</span>
      ) : null}
    </div>
  );
}
