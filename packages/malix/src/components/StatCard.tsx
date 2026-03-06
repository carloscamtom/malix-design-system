import React from 'react';

export type StatCardChangeType = 'positive' | 'negative' | 'neutral';

export type StatCardProps = React.HTMLAttributes<HTMLDivElement> & {
  label: string;
  value: string;
  change?: string;
  changeType?: StatCardChangeType;
};

function ChangeIcon({ type }: { type: StatCardChangeType }) {
  const shared = { width: 12, height: 12, viewBox: '0 0 24 24', fill: 'none', stroke: 'currentColor', strokeWidth: 2, strokeLinecap: 'round' as const, strokeLinejoin: 'round' as const };

  switch (type) {
    case 'positive':
      return (
        <svg {...shared}>
          <polyline points="22 7 13.5 15.5 8.5 10.5 2 17" />
          <polyline points="16 7 22 7 22 13" />
        </svg>
      );
    case 'negative':
      return (
        <svg {...shared}>
          <polyline points="22 17 13.5 8.5 8.5 13.5 2 7" />
          <polyline points="16 17 22 17 22 11" />
        </svg>
      );
    case 'neutral':
      return (
        <svg {...shared}>
          <line x1="5" y1="12" x2="19" y2="12" />
        </svg>
      );
  }
}

export function StatCard({
  label,
  value,
  change,
  changeType = 'neutral',
  className,
  ...props
}: StatCardProps) {
  return (
    <div
      className={`malix-stat-card${className ? ` ${className}` : ''}`}
      {...props}
    >
      <span className="malix-stat-card__label">{label}</span>
      <span className="malix-stat-card__value">{value}</span>
      {change ? (
        <span className="malix-stat-card__change" data-type={changeType}>
          <span className="malix-stat-card__change-icon">
            <ChangeIcon type={changeType} />
          </span>
          {change}
        </span>
      ) : null}
    </div>
  );
}
