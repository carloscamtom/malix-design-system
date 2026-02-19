import React from 'react';

export type ProgressBarVariant = 'default' | 'success';

export type ProgressBarProps = React.HTMLAttributes<HTMLDivElement> & {
  value: number;
  label?: string;
  showPercent?: boolean;
  variant?: ProgressBarVariant;
};

export function ProgressBar({
  value,
  label,
  showPercent = true,
  variant = 'default',
  className,
  ...props
}: ProgressBarProps) {
  const clampedValue = Math.max(0, Math.min(100, value));

  return (
    <div
      className={`malix-progress-bar${className ? ` ${className}` : ''}`}
      data-variant={variant}
      role="progressbar"
      aria-valuenow={clampedValue}
      aria-valuemin={0}
      aria-valuemax={100}
      aria-label={label}
      {...props}
    >
      {(label || showPercent) ? (
        <div className="malix-progress-bar__label-row">
          {label ? <span className="malix-progress-bar__label">{label}</span> : null}
          {showPercent ? <span className="malix-progress-bar__percent">{clampedValue}%</span> : null}
        </div>
      ) : null}
      <div className="malix-progress-bar__track">
        <div
          className="malix-progress-bar__fill"
          style={{ width: `${clampedValue}%` }}
        />
      </div>
    </div>
  );
}
