import React from 'react';

export type StatCardChangeType = 'positive' | 'negative' | 'neutral';

export type StatCardProps = React.HTMLAttributes<HTMLDivElement> & {
  label: string;
  value: string;
  change?: string;
  changeType?: StatCardChangeType;
};

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
          {change}
        </span>
      ) : null}
    </div>
  );
}
