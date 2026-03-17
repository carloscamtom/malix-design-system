import React, { useEffect, useRef } from 'react';

export type ConfirmDialogVariant = 'default' | 'danger' | 'warning' | 'info';

export type ConfirmDialogProps = {
  open: boolean;
  title: string;
  description?: string;
  onConfirm: () => void;
  onCancel: () => void;
  confirmLabel?: string;
  cancelLabel?: string;
  variant?: ConfirmDialogVariant;
  icon?: React.ReactNode;
  children?: React.ReactNode;
  loading?: boolean;
};

const FOCUSABLE_SELECTOR = 'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])';

export function ConfirmDialog({
  open,
  title,
  description,
  onConfirm,
  onCancel,
  confirmLabel = 'Confirm',
  cancelLabel = 'Cancel',
  variant = 'default',
  icon,
  children,
  loading = false,
}: ConfirmDialogProps) {
  const panelRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    if (!open || !panelRef.current) return;

    const panel = panelRef.current;
    const focusables = Array.from(panel.querySelectorAll<HTMLElement>(FOCUSABLE_SELECTOR));
    const first = focusables[0];
    const last = focusables[focusables.length - 1];

    first?.focus();

    function onKeyDown(event: KeyboardEvent) {
      if (event.key === 'Escape') {
        event.preventDefault();
        onCancel();
      }

      if (event.key === 'Tab' && focusables.length > 0) {
        if (event.shiftKey && document.activeElement === first) {
          event.preventDefault();
          last?.focus();
        } else if (!event.shiftKey && document.activeElement === last) {
          event.preventDefault();
          first?.focus();
        }
      }
    }

    document.addEventListener('keydown', onKeyDown);
    return () => document.removeEventListener('keydown', onKeyDown);
  }, [open, onCancel]);

  if (!open) return null;

  return (
    <div className="malix-overlay-backdrop" onMouseDown={onCancel}>
      <div
        ref={panelRef}
        className="malix-confirm-dialog"
        role="alertdialog"
        aria-modal="true"
        aria-labelledby="malix-confirm-title"
        aria-describedby={description ? 'malix-confirm-desc' : undefined}
        data-variant={variant}
        onMouseDown={(event) => event.stopPropagation()}
      >
        <div className="malix-confirm-dialog__content">
          {icon ? (
            <div className="malix-confirm-dialog__icon">{icon}</div>
          ) : null}
          <div className="malix-confirm-dialog__text">
            <h3 id="malix-confirm-title" className="malix-confirm-dialog__title">{title}</h3>
            {description ? (
              <p id="malix-confirm-desc" className="malix-confirm-dialog__description">{description}</p>
            ) : null}
            {children}
          </div>
        </div>
        <div className="malix-confirm-dialog__actions">
          <button
            type="button"
            className="malix-button"
            data-hierarchy="secondary"
            onClick={onCancel}
            disabled={loading}
          >
            <span>{cancelLabel}</span>
          </button>
          <button
            type="button"
            className="malix-button malix-confirm-dialog__confirm-btn"
            data-hierarchy="primary"
            data-variant={variant}
            onClick={onConfirm}
            disabled={loading}
            data-loading={loading || undefined}
          >
            <span>{confirmLabel}</span>
          </button>
        </div>
      </div>
    </div>
  );
}
