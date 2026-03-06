import React from 'react';

export type SelectOption = {
  value: string;
  label: string;
};

export type SelectProps = Omit<React.SelectHTMLAttributes<HTMLSelectElement>, 'onChange'> & {
  placeholder?: string;
  options?: SelectOption[];
  onChange?: (value: string) => void;
  filled?: boolean;
};

export function Select({
  value,
  placeholder,
  options = [],
  onChange,
  disabled,
  filled,
  className,
  ...props
}: SelectProps) {
  return (
    <div
      className={`malix-select${className ? ` ${className}` : ''}`}
      data-filled={filled || undefined}
      data-disabled={disabled || undefined}
    >
      <select
        className="malix-select__native"
        value={value}
        disabled={disabled}
        onChange={(e) => onChange?.(e.target.value)}
        {...props}
      >
        {placeholder ? (
          <option value="" disabled>
            {placeholder}
          </option>
        ) : null}
        {options.map((opt) => (
          <option key={opt.value} value={opt.value}>
            {opt.label}
          </option>
        ))}
      </select>
      <span className="malix-select__icon">
        <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden="true">
          <path
            d="M4 6L8 10L12 6"
            stroke="currentColor"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </span>
    </div>
  );
}
