import React from 'react';

export type ToggleProps = Omit<React.HTMLAttributes<HTMLButtonElement>, 'onChange'> & {
  checked?: boolean;
  onChange?: (checked: boolean) => void;
  disabled?: boolean;
  label?: string;
};

export function Toggle({
  checked = false,
  onChange,
  disabled = false,
  label,
  className,
  ...props
}: ToggleProps) {
  const handleClick = () => {
    if (!disabled && onChange) {
      onChange(!checked);
    }
  };

  const toggle = (
    <button
      type="button"
      role="switch"
      className={`malix-toggle${className ? ` ${className}` : ''}`}
      data-checked={checked}
      data-disabled={disabled}
      aria-checked={checked}
      disabled={disabled}
      onClick={handleClick}
      {...props}
    >
      <span className="malix-toggle__knob" />
    </button>
  );

  if (label) {
    return (
      <div className="malix-toggle-row">
        <span className="malix-toggle-row__label">{label}</span>
        {toggle}
      </div>
    );
  }

  return toggle;
}
