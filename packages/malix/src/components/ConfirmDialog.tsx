'use client';

import React, { useId, useRef } from 'react';
import { createPortal } from 'react-dom';
import { useOverlayBehavior } from '../hooks/useOverlayBehavior';

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

/**
 * <ConfirmDialog> — semantic confirmation preset built on top of the
 * overlay primitives. Use for binary confirm/cancel flows with a single
 * message. For custom layouts (reason textareas, multi-step, extra
 * controls), use <Dialog> instead.
 */
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
  const titleId = useId();
  const descriptionId = useId();

  useOverlayBehavior({ open, onClose: onCancel, panelRef });

  if (!open) return null;
  if (typeof document === 'undefined') return null;

  const content = (
    <div className="malix-overlay-backdrop" onMouseDown={onCancel}>
      <div
        ref={panelRef}
        className="malix-confirm-dialog"
        role="alertdialog"
        aria-modal="true"
        aria-labelledby={titleId}
        aria-describedby={description ? descriptionId : undefined}
        data-variant={variant}
        tabIndex={-1}
        onMouseDown={(event) => event.stopPropagation()}
      >
        <div className="malix-confirm-dialog__content">
          {icon ? <div className="malix-confirm-dialog__icon">{icon}</div> : null}
          <div className="malix-confirm-dialog__text">
            <h3 id={titleId} className="malix-confirm-dialog__title">
              {title}
            </h3>
            {description ? (
              <p id={descriptionId} className="malix-confirm-dialog__description">
                {description}
              </p>
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

  return createPortal(content, document.body);
}
