import React from 'react';

export type EmptyStateProps = React.HTMLAttributes<HTMLDivElement> & {
  icon?: React.ReactNode;
  title: string;
  description?: string;
  action?: React.ReactNode;
};

const DefaultIcon = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path
      d="M3 7V5C3 3.895 3.895 3 5 3H9L11 5H19C20.105 5 21 5.895 21 7V9"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <rect
      x="2"
      y="9"
      width="20"
      height="12"
      rx="2"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M9 15H15"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

export function EmptyState({
  icon,
  title,
  description,
  action,
  className,
  ...props
}: EmptyStateProps) {
  return (
    <div
      className={`malix-empty-state${className ? ` ${className}` : ''}`}
      {...props}
    >
      <div className="malix-empty-state__icon-wrap">
        {icon ?? <DefaultIcon />}
      </div>
      <h3 className="malix-empty-state__title">{title}</h3>
      {description ? (
        <p className="malix-empty-state__description">{description}</p>
      ) : null}
      {action ? (
        <div className="malix-empty-state__action">{action}</div>
      ) : null}
    </div>
  );
}
