import React from 'react';

export type DateInputProps = Omit<React.InputHTMLAttributes<HTMLInputElement>, 'type' | 'onChange'> & {
  value?: string;
  placeholder?: string;
  onChange?: (value: string) => void;
  disabled?: boolean;
};

export function DateInput({
  value,
  placeholder = 'dd/mm/yyyy',
  onChange,
  disabled,
  className,
  id,
  ...props
}: DateInputProps) {
  const inputId = id || `date-input-${React.useId()}`;

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    onChange?.(e.target.value);
  };

  return (
    <div
      className={`malix-date-input${className ? ` ${className}` : ''}`}
      data-filled={value ? true : undefined}
      data-disabled={disabled || undefined}
    >
      <input
        id={inputId}
        type="date"
        className="malix-date-input__native"
        value={value}
        onChange={handleChange}
        disabled={disabled}
        aria-label={placeholder}
        {...props}
      />
      <span className="malix-date-input__value">
        {value || placeholder}
      </span>
      <span className="malix-date-input__icon" aria-hidden="true">
        <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path
            d="M12.667 2.667H3.333C2.597 2.667 2 3.264 2 4v9.333c0 .737.597 1.334 1.333 1.334h9.334c.736 0 1.333-.597 1.333-1.334V4c0-.736-.597-1.333-1.333-1.333ZM10.667 1.333V4M5.333 1.333V4M2 6.667h12"
            stroke="currentColor"
            strokeWidth="1.33"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </span>
    </div>
  );
}
