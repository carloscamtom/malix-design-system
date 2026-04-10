'use client';

import React, { createContext, useContext, useId, useRef } from 'react';
import { createPortal } from 'react-dom';
import { useOverlayBehavior } from '../hooks/useOverlayBehavior';

/**
 * <Dialog> — canonical composable modal dialog.
 *
 * Composition:
 *   <Dialog open={open} onClose={close} variant="danger">
 *     <Dialog.Header>Delete catalog?</Dialog.Header>
 *     <Dialog.Body>
 *       This action can't be undone.
 *       <textarea ... />
 *     </Dialog.Body>
 *     <Dialog.Footer>
 *       <Button hierarchy="secondary" onClick={close}>Cancel</Button>
 *       <Button hierarchy="danger" onClick={confirm}>Delete</Button>
 *     </Dialog.Footer>
 *   </Dialog>
 *
 * Behavior (from useOverlayBehavior):
 *   - Rendered via React portal into document.body
 *   - Focus trap + Tab cycling
 *   - Escape closes (disable via closeOnEsc={false})
 *   - Backdrop click closes (disable via closeOnBackdropClick={false})
 *   - Body scroll lock while open
 *   - Focus restored to the previously-focused element on close
 *   - Automatic ARIA wiring via useId (labelled by Dialog.Header,
 *     described by Dialog.Body)
 *
 * For the confirm-primitive preset, use <ConfirmDialog> instead.
 */

export type DialogVariant = 'default' | 'danger' | 'warning' | 'info';
export type DialogSize = 'sm' | 'md' | 'lg';

export type DialogProps = {
  /** Whether the dialog is visible. */
  open: boolean;
  /** Called when the user requests the dialog to close (esc, backdrop, close button). */
  onClose: () => void;
  /** Semantic variant — affects accent color of the header border and icons. */
  variant?: DialogVariant;
  /** Controls max-width of the panel. */
  size?: DialogSize;
  /** Clicking the backdrop closes the dialog. Default true. */
  closeOnBackdropClick?: boolean;
  /** Pressing Escape closes the dialog. Default true. */
  closeOnEsc?: boolean;
  /** Element to focus when the dialog opens. Defaults to the first focusable. */
  initialFocusRef?: React.RefObject<HTMLElement | null>;
  /** Optional className on the panel. */
  className?: string;
  /**
   * Role — `dialog` (default) or `alertdialog` for urgent confirmations.
   * Use `alertdialog` for destructive confirm flows so screen readers
   * announce immediately.
   */
  role?: 'dialog' | 'alertdialog';
  children: React.ReactNode;
};

type DialogContextValue = {
  onClose: () => void;
  titleId: string;
  descriptionId: string;
  variant: DialogVariant;
};

const DialogContext = createContext<DialogContextValue | null>(null);

function useDialogContext(component: string): DialogContextValue {
  const ctx = useContext(DialogContext);
  if (!ctx) {
    throw new Error(
      `<Dialog.${component}> must be rendered inside <Dialog>. ` +
        `Wrap it in a <Dialog> component.`,
    );
  }
  return ctx;
}

export function Dialog({
  open,
  onClose,
  variant = 'default',
  size = 'md',
  closeOnBackdropClick = true,
  closeOnEsc = true,
  initialFocusRef,
  className,
  role = 'dialog',
  children,
}: DialogProps) {
  const panelRef = useRef<HTMLDivElement | null>(null);
  const titleId = useId();
  const descriptionId = useId();

  useOverlayBehavior({
    open,
    onClose,
    panelRef,
    closeOnEsc,
    initialFocusRef,
  });

  if (!open) return null;
  if (typeof document === 'undefined') return null;

  const handleBackdropMouseDown = closeOnBackdropClick ? onClose : undefined;

  const panelClassName = ['malix-dialog', className].filter(Boolean).join(' ');

  const contextValue: DialogContextValue = {
    onClose,
    titleId,
    descriptionId,
    variant,
  };

  const content = (
    <DialogContext.Provider value={contextValue}>
      <div className="malix-overlay-backdrop" onMouseDown={handleBackdropMouseDown}>
        <div
          ref={panelRef}
          className={panelClassName}
          role={role}
          aria-modal="true"
          aria-labelledby={titleId}
          aria-describedby={descriptionId}
          data-variant={variant}
          data-size={size}
          tabIndex={-1}
          onMouseDown={(event) => event.stopPropagation()}
        >
          {children}
        </div>
      </div>
    </DialogContext.Provider>
  );

  return createPortal(content, document.body);
}

export type DialogHeaderProps = {
  children: React.ReactNode;
  /** Show the built-in close (X) button. Default true. */
  showClose?: boolean;
  /** Accessible label for the close button. */
  closeLabel?: string;
};

function DialogHeader({
  children,
  showClose = true,
  closeLabel = 'Close',
}: DialogHeaderProps) {
  const { onClose, titleId } = useDialogContext('Header');
  return (
    <div className="malix-dialog__header">
      <h2 className="malix-dialog__title" id={titleId}>
        {children}
      </h2>
      {showClose ? (
        <button
          type="button"
          className="malix-dialog__close"
          onClick={onClose}
          aria-label={closeLabel}
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
      ) : null}
    </div>
  );
}

export type DialogBodyProps = {
  children: React.ReactNode;
  className?: string;
};

function DialogBody({ children, className }: DialogBodyProps) {
  const { descriptionId } = useDialogContext('Body');
  const bodyClassName = ['malix-dialog__body', className].filter(Boolean).join(' ');
  return (
    <div id={descriptionId} className={bodyClassName}>
      {children}
    </div>
  );
}

export type DialogFooterProps = {
  children: React.ReactNode;
  /** Where to align action buttons. Default "end". */
  align?: 'start' | 'center' | 'end' | 'between';
};

function DialogFooter({ children, align = 'end' }: DialogFooterProps) {
  return (
    <div className="malix-dialog__footer" data-align={align}>
      {children}
    </div>
  );
}

Dialog.Header = DialogHeader;
Dialog.Body = DialogBody;
Dialog.Footer = DialogFooter;
