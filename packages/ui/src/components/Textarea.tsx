import React from 'react';

export type TextareaProps = React.TextareaHTMLAttributes<HTMLTextAreaElement> & {
  label?: string;
  helperText?: string;
  error?: boolean;
  errorMessage?: string;
};

export function Textarea({
  label,
  helperText,
  error,
  errorMessage,
  id,
  className,
  ...props
}: TextareaProps) {
  const textareaId = id || `textarea-${React.useId()}`;
  const displayHelper = error && errorMessage ? errorMessage : helperText;

  return (
    <div
      className={`malix-textarea-group${className ? ` ${className}` : ''}`}
      data-error={error || undefined}
    >
      {label ? (
        <label htmlFor={textareaId} className="malix-textarea-group__label">
          {label}
        </label>
      ) : null}
      <textarea
        id={textareaId}
        className="malix-textarea-group__field"
        aria-invalid={error || undefined}
        {...props}
      />
      {displayHelper ? (
        <span className="malix-textarea-group__helper">{displayHelper}</span>
      ) : null}
    </div>
  );
}
