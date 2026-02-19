import React from 'react';

export type LanguageSelectorOption = {
  value: string;
  label: string;
};

export type LanguageSelectorProps = Omit<React.HTMLAttributes<HTMLDivElement>, 'onChange'> & {
  value: string;
  options?: LanguageSelectorOption[];
  onChange?: (value: string) => void;
};

export function LanguageSelector({
  value,
  options,
  onChange,
  className,
  ...props
}: LanguageSelectorProps) {
  const selectedOption = options?.find((opt) => opt.value === value);
  const displayLabel = selectedOption?.label ?? value;

  return (
    <div
      className={`malix-language-selector${className ? ` ${className}` : ''}`}
      {...props}
    >
      <span className="malix-language-selector__icon" aria-hidden="true">
        <svg
          width="16"
          height="16"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <circle cx="12" cy="12" r="10" />
          <line x1="2" y1="12" x2="22" y2="12" />
          <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10A15.3 15.3 0 0 1 12 2z" />
        </svg>
      </span>

      <select
        className="malix-language-selector__select"
        value={value}
        onChange={(e) => onChange?.(e.target.value)}
        aria-label="Select language"
      >
        {options ? (
          options.map((opt) => (
            <option key={opt.value} value={opt.value}>
              {opt.label}
            </option>
          ))
        ) : (
          <option value={value}>{displayLabel}</option>
        )}
      </select>

      <span className="malix-language-selector__label">{displayLabel}</span>

      <span className="malix-language-selector__chevron" aria-hidden="true">
        <svg
          width="14"
          height="14"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <polyline points="6 9 12 15 18 9" />
        </svg>
      </span>
    </div>
  );
}
