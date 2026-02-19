import React from 'react';

export type SelectionCardProps = {
  title: string;
  description?: string;
  icon?: React.ReactNode;
  active?: boolean;
  onClick?: () => void;
  className?: string;
};

export function SelectionCard({
  title,
  description,
  icon,
  active = false,
  onClick,
  className,
}: SelectionCardProps) {
  return (
    <div
      className={`malix-selection-card${className ? ` ${className}` : ''}`}
      data-active={active || undefined}
      onClick={onClick}
      role={onClick ? 'button' : undefined}
      tabIndex={onClick ? 0 : undefined}
      onKeyDown={
        onClick
          ? (e: React.KeyboardEvent) => {
              if (e.key === 'Enter' || e.key === ' ') {
                e.preventDefault();
                onClick();
              }
            }
          : undefined
      }
    >
      {icon ? (
        <span className="malix-selection-card__icon-wrap">{icon}</span>
      ) : null}
      <span className="malix-selection-card__title">{title}</span>
      {description ? (
        <span className="malix-selection-card__description">{description}</span>
      ) : null}
    </div>
  );
}
