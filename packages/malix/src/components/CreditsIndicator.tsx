import React from 'react';

export type CreditsIndicatorProps = React.HTMLAttributes<HTMLDivElement> & {
  remaining: number;
  label?: string;
};

export function CreditsIndicator({
  remaining,
  label = 'Credits Remaining',
  className,
  ...props
}: CreditsIndicatorProps) {
  return (
    <div
      className={`malix-credits-indicator${className ? ` ${className}` : ''}`}
      {...props}
    >
      <span className="malix-credits-indicator__icon" aria-hidden="true">
        <svg
          width="20"
          height="20"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <ellipse cx="12" cy="6" rx="8" ry="3" />
          <path d="M4 6v6c0 1.66 3.58 3 8 3s8-1.34 8-3V6" />
          <path d="M4 12v6c0 1.66 3.58 3 8 3s8-1.34 8-3v-6" />
        </svg>
      </span>
      <div className="malix-credits-indicator__info">
        <span className="malix-credits-indicator__label">{label}</span>
        <span className="malix-credits-indicator__value">{remaining}</span>
      </div>
    </div>
  );
}
