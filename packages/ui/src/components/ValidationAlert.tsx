import React from 'react';

export type ValidationAlertVariant = 'error' | 'warning' | 'info';

export type ValidationAlertProps = {
  title: string;
  message: string;
  onClose?: () => void;
  variant?: ValidationAlertVariant;
  className?: string;
};

function AlertIcon({ variant }: { variant: ValidationAlertVariant }) {
  const shared = { width: 18, height: 18, viewBox: '0 0 24 24', fill: 'none', stroke: 'currentColor', strokeWidth: 2, strokeLinecap: 'round' as const, strokeLinejoin: 'round' as const };

  switch (variant) {
    case 'error':
      return (
        <svg {...shared}>
          <circle cx="12" cy="12" r="10" />
          <line x1="12" y1="8" x2="12" y2="12" />
          <line x1="12" y1="16" x2="12.01" y2="16" />
        </svg>
      );
    case 'warning':
      return (
        <svg {...shared}>
          <path d="m21.73 18-8-14a2 2 0 0 0-3.48 0l-8 14A2 2 0 0 0 4 21h16a2 2 0 0 0 1.73-3Z" />
          <line x1="12" y1="9" x2="12" y2="13" />
          <line x1="12" y1="17" x2="12.01" y2="17" />
        </svg>
      );
    case 'info':
      return (
        <svg {...shared}>
          <circle cx="12" cy="12" r="10" />
          <line x1="12" y1="16" x2="12" y2="12" />
          <line x1="12" y1="8" x2="12.01" y2="8" />
        </svg>
      );
  }
}

export function ValidationAlert({
  title,
  message,
  onClose,
  variant = 'error',
  className,
}: ValidationAlertProps) {
  return (
    <div
      className={`malix-validation-alert${className ? ` ${className}` : ''}`}
      data-variant={variant}
      role="alert"
    >
      <span className="malix-validation-alert__icon">
        <AlertIcon variant={variant} />
      </span>
      <div className="malix-validation-alert__content">
        <span className="malix-validation-alert__title">{title}</span>
        <span className="malix-validation-alert__message">{message}</span>
      </div>
      {onClose ? (
        <button
          type="button"
          className="malix-validation-alert__close"
          onClick={onClose}
          aria-label="Close"
        >
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <line x1="18" y1="6" x2="6" y2="18" />
            <line x1="6" y1="6" x2="18" y2="18" />
          </svg>
        </button>
      ) : null}
    </div>
  );
}
