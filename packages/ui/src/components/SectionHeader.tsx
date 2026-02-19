import React from 'react';

export type SectionHeaderProps = React.HTMLAttributes<HTMLDivElement> & {
  title: string;
  description?: string;
  actions?: React.ReactNode;
};

export function SectionHeader({
  title,
  description,
  actions,
  className,
  ...props
}: SectionHeaderProps) {
  return (
    <div
      className={`malix-section-header${className ? ` ${className}` : ''}`}
      {...props}
    >
      <div className="malix-section-header__left">
        <h2 className="malix-section-header__title">{title}</h2>
        {description ? (
          <p className="malix-section-header__description">{description}</p>
        ) : null}
      </div>
      {actions ? (
        <div className="malix-section-header__actions">{actions}</div>
      ) : null}
    </div>
  );
}
