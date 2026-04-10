'use client';

import React, { useRef } from 'react';
import { createPortal } from 'react-dom';
import { useOverlayBehavior } from '../hooks/useOverlayBehavior';

export type ModalProps = {
  open: boolean;
  title: string;
  onClose: () => void;
  onConfirm?: () => void;
  confirmLabel?: string;
  cancelLabel?: string;
  children: React.ReactNode;
};

/**
 * <Modal> — opinionated glass-style modal with header/body/footer preset.
 *
 * For custom layouts, prefer <Dialog> with slot composition
 * (<Dialog.Header>, <Dialog.Body>, <Dialog.Footer>). Modal is kept as a
 * quick preset for simple title + content + confirm flows.
 */
export function Modal({
  open,
  title,
  onClose,
  onConfirm,
  confirmLabel = 'Confirm',
  cancelLabel = 'Cancel',
  children,
}: ModalProps) {
  const panelRef = useRef<HTMLDivElement | null>(null);

  useOverlayBehavior({ open, onClose, panelRef });

  if (!open) return null;
  if (typeof document === 'undefined') return null;

  const content = (
    <div className="malix-overlay-backdrop" onMouseDown={onClose}>
      <div
        ref={panelRef}
        className="malix-modal"
        role="dialog"
        aria-modal="true"
        aria-label={title}
        tabIndex={-1}
        onMouseDown={(event) => event.stopPropagation()}
      >
        <div className="malix-modal__header">
          <h2 className="malix-modal__title">{title}</h2>
          <button
            type="button"
            className="malix-modal__close"
            onClick={onClose}
            aria-label="Close"
          >
            <svg
              width="18"
              height="18"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              aria-hidden="true"
            >
              <line x1="18" y1="6" x2="6" y2="18" />
              <line x1="6" y1="6" x2="18" y2="18" />
            </svg>
          </button>
        </div>
        <div className="malix-modal__body">{children}</div>
        <div className="malix-modal__footer">
          <button
            type="button"
            className="malix-button"
            data-hierarchy="secondary"
            onClick={onClose}
          >
            <span>{cancelLabel}</span>
          </button>
          {onConfirm ? (
            <button
              type="button"
              className="malix-button"
              data-hierarchy="primary"
              onClick={onConfirm}
            >
              <span>{confirmLabel}</span>
            </button>
          ) : null}
        </div>
      </div>
    </div>
  );

  return createPortal(content, document.body);
}
