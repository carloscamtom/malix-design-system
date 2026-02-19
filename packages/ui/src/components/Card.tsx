import React from 'react';

export type CardLevel = 1 | 2 | 3;

export type CardProps = React.HTMLAttributes<HTMLDivElement> & {
  level?: CardLevel;
  title?: string;
  description?: string;
};

export function Card({
  level = 1,
  title,
  description,
  children,
  className,
  ...props
}: CardProps) {
  return (
    <div
      className={`malix-card${className ? ` ${className}` : ''}`}
      data-level={level}
      {...props}
    >
      {(title || description) ? (
        <div className="malix-card__header">
          {title ? <h3 className="malix-card__title">{title}</h3> : null}
          {description ? <p className="malix-card__desc">{description}</p> : null}
        </div>
      ) : null}
      {children ? <div className="malix-card__body">{children}</div> : null}
    </div>
  );
}
