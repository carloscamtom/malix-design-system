import React from 'react';

export type RadioProps = Omit<React.HTMLAttributes<HTMLButtonElement>, 'onChange'> & {
  checked?: boolean;
  onChange?: (value: string) => void;
  disabled?: boolean;
  label?: string;
  name?: string;
  value: string;
};

export function Radio({
  checked = false,
  onChange,
  disabled = false,
  label,
  name,
  value,
  className,
  ...props
}: RadioProps) {
  const handleClick = () => {
    if (!disabled && onChange) {
      onChange(value);
    }
  };

  const radio = (
    <button
      type="button"
      role="radio"
      className={`malix-radio${className ? ` ${className}` : ''}`}
      data-checked={checked}
      data-disabled={disabled}
      aria-checked={checked}
      disabled={disabled}
      data-name={name}
      data-value={value}
      onClick={handleClick}
      {...props}
    >
      <span className="malix-radio__dot" />
    </button>
  );

  if (label) {
    return (
      <label className="malix-radio-row">
        {radio}
        <span className="malix-radio-row__label">{label}</span>
      </label>
    );
  }

  return radio;
}
