import React from 'react';

export type FileCardProps = React.HTMLAttributes<HTMLDivElement> & {
  fileName: string;
  meta?: string;
  icon?: React.ReactNode;
  onAction?: React.MouseEventHandler<HTMLButtonElement>;
};

const DefaultFileIcon = () => (
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
    <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
    <polyline points="14 2 14 8 20 8" />
    <line x1="16" y1="13" x2="8" y2="13" />
    <line x1="16" y1="17" x2="8" y2="17" />
    <polyline points="10 9 9 9 8 9" />
  </svg>
);

const MoreVerticalIcon = () => (
  <svg
    width="16"
    height="16"
    viewBox="0 0 24 24"
    fill="currentColor"
  >
    <circle cx="12" cy="5" r="1.5" />
    <circle cx="12" cy="12" r="1.5" />
    <circle cx="12" cy="19" r="1.5" />
  </svg>
);

export function FileCard({
  fileName,
  meta,
  icon,
  onAction,
  className,
  ...props
}: FileCardProps) {
  return (
    <div
      className={`malix-file-card${className ? ` ${className}` : ''}`}
      {...props}
    >
      <div className="malix-file-card__icon-wrap">
        <span className="malix-file-card__icon">
          {icon ?? <DefaultFileIcon />}
        </span>
      </div>
      <div className="malix-file-card__info">
        <span className="malix-file-card__name">{fileName}</span>
        {meta ? (
          <span className="malix-file-card__meta">{meta}</span>
        ) : null}
      </div>
      {onAction ? (
        <button
          type="button"
          className="malix-file-card__action"
          onClick={onAction}
          aria-label="More actions"
        >
          <MoreVerticalIcon />
        </button>
      ) : null}
    </div>
  );
}
