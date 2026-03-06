import React from 'react';

export type CheckboxProps = Omit<React.HTMLAttributes<HTMLButtonElement>, 'onChange'> & {
  checked?: boolean;
  onChange?: (checked: boolean) => void;
  disabled?: boolean;
  label?: string;
  indeterminate?: boolean;
};

export function Checkbox({
  checked = false,
  onChange,
  disabled = false,
  label,
  indeterminate = false,
  className,
  ...props
}: CheckboxProps) {
  const handleClick = () => {
    if (!disabled && onChange) {
      onChange(!checked);
    }
  };

  const checkbox = (
    <button
      type="button"
      role="checkbox"
      className={`malix-checkbox${className ? ` ${className}` : ''}`}
      data-checked={checked}
      data-disabled={disabled}
      data-indeterminate={indeterminate}
      aria-checked={indeterminate ? 'mixed' : checked}
      disabled={disabled}
      onClick={handleClick}
      {...props}
    >
      {checked && !indeterminate ? (
        <svg
          className="malix-checkbox__icon"
          viewBox="0 0 12 12"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          aria-hidden="true"
        >
          <path
            d="M2 6l3 3 5-5"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      ) : null}
      {indeterminate ? (
        <svg
          className="malix-checkbox__icon"
          viewBox="0 0 12 12"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          aria-hidden="true"
        >
          <path
            d="M2 6h8"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
          />
        </svg>
      ) : null}
    </button>
  );

  if (label) {
    return (
      <label className="malix-checkbox-row">
        {checkbox}
        <span className="malix-checkbox-row__label">{label}</span>
      </label>
    );
  }

  return checkbox;
}
