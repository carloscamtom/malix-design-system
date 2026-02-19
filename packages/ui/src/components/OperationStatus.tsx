import React from 'react';

export type OperationStatusType = 'active' | 'completed' | 'failed' | 'pending';

export type OperationStatusProps = React.HTMLAttributes<HTMLSpanElement> & {
  status: OperationStatusType;
  label?: string;
};

const DEFAULT_LABELS: Record<OperationStatusType, string> = {
  active: 'Active',
  completed: 'Completed',
  failed: 'Failed',
  pending: 'Pending',
};

function StatusIcon({ status }: { status: OperationStatusType }) {
  const shared = { width: 14, height: 14, viewBox: '0 0 24 24', fill: 'none', stroke: 'currentColor', strokeWidth: 2, strokeLinecap: 'round' as const, strokeLinejoin: 'round' as const };

  switch (status) {
    case 'active':
      return (
        <svg {...shared}>
          <path d="M21 12a9 9 0 1 1-6.219-8.56" />
        </svg>
      );
    case 'completed':
      return (
        <svg {...shared}>
          <circle cx="12" cy="12" r="10" />
          <path d="m9 12 2 2 4-4" />
        </svg>
      );
    case 'failed':
      return (
        <svg {...shared}>
          <circle cx="12" cy="12" r="10" />
          <path d="m15 9-6 6" />
          <path d="m9 9 6 6" />
        </svg>
      );
    case 'pending':
      return (
        <svg {...shared}>
          <circle cx="12" cy="12" r="10" />
          <polyline points="12 6 12 12 16 14" />
        </svg>
      );
  }
}

export function OperationStatus({
  status,
  label,
  className,
  ...props
}: OperationStatusProps) {
  return (
    <span
      className={`malix-op-status${className ? ` ${className}` : ''}`}
      data-status={status}
      {...props}
    >
      <span className="malix-op-status__icon">
        <StatusIcon status={status} />
      </span>
      <span className="malix-op-status__label">
        {label ?? DEFAULT_LABELS[status]}
      </span>
    </span>
  );
}
