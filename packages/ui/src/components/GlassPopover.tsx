import React from 'react';

export type GlassPopoverProps = React.HTMLAttributes<HTMLDivElement> & {
  title?: string;
  onClose?: () => void;
};

export function GlassPopover({
  title,
  onClose,
  children,
  className,
  ...props
}: GlassPopoverProps) {
  return (
    <div
      className={`malix-glass-popover${className ? ` ${className}` : ''}`}
      {...props}
    >
      {(title || onClose) ? (
        <div className="malix-glass-popover__header">
          {title ? <span className="malix-glass-popover__title">{title}</span> : null}
          {onClose ? (
            <button
              type="button"
              className="malix-glass-popover__close"
              onClick={onClose}
              aria-label="Close"
            >
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="18" y1="6" x2="6" y2="18" /><line x1="6" y1="6" x2="18" y2="18" /></svg>
            </button>
          ) : null}
        </div>
      ) : null}
      <div className="malix-glass-popover__body">{children}</div>
    </div>
  );
}
