'use client';

import { useEffect, useRef } from 'react';

/**
 * Shared behavior hook for modal overlays (Dialog, Modal, ConfirmDialog).
 *
 * Handles everything a well-behaved modal needs:
 *   - Focus trap (Tab / Shift+Tab cycles within the panel)
 *   - Escape-to-close
 *   - Body scroll lock while open
 *   - Focus restoration to the previously-focused element on close
 *   - Initial focus (first focusable in panel, or a provided ref)
 *
 * Intentionally does NOT own: portal rendering, backdrop, markup. Those
 * live in each component so the CSS + semantics stay component-specific.
 */

const FOCUSABLE_SELECTOR =
  'button:not([disabled]), [href], input:not([disabled]), select:not([disabled]), textarea:not([disabled]), [tabindex]:not([tabindex="-1"])';

export type UseOverlayBehaviorOptions = {
  open: boolean;
  onClose: () => void;
  panelRef: React.RefObject<HTMLElement | null>;
  closeOnEsc?: boolean;
  initialFocusRef?: React.RefObject<HTMLElement | null>;
};

export function useOverlayBehavior({
  open,
  onClose,
  panelRef,
  closeOnEsc = true,
  initialFocusRef,
}: UseOverlayBehaviorOptions): void {
  const previousActiveRef = useRef<HTMLElement | null>(null);

  useEffect(() => {
    if (!open) return;
    const panel = panelRef.current;
    if (!panel) return;

    // Remember what had focus before we opened so we can restore it on close.
    previousActiveRef.current = (document.activeElement as HTMLElement) ?? null;

    // Lock body scroll while the overlay is open.
    const previousBodyOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';

    // Move focus into the panel on next frame so portaled children are mounted.
    const focusTimer = window.setTimeout(() => {
      if (initialFocusRef?.current) {
        initialFocusRef.current.focus();
        return;
      }
      const focusables = Array.from(
        panel.querySelectorAll<HTMLElement>(FOCUSABLE_SELECTOR),
      );
      if (focusables.length > 0) {
        focusables[0].focus();
      } else {
        // Fallback: focus the panel itself (needs tabIndex={-1} on the panel).
        panel.focus();
      }
    }, 0);

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape' && closeOnEsc) {
        event.preventDefault();
        onClose();
        return;
      }
      if (event.key !== 'Tab') return;

      const focusables = Array.from(
        panel.querySelectorAll<HTMLElement>(FOCUSABLE_SELECTOR),
      );
      if (focusables.length === 0) {
        event.preventDefault();
        return;
      }
      const first = focusables[0];
      const last = focusables[focusables.length - 1];
      const active = document.activeElement;

      if (event.shiftKey && active === first) {
        event.preventDefault();
        last.focus();
      } else if (!event.shiftKey && active === last) {
        event.preventDefault();
        first.focus();
      }
    };

    document.addEventListener('keydown', onKeyDown);

    return () => {
      window.clearTimeout(focusTimer);
      document.removeEventListener('keydown', onKeyDown);
      document.body.style.overflow = previousBodyOverflow;
      // Restore focus to the element that had it before the overlay opened.
      const previous = previousActiveRef.current;
      if (previous && typeof previous.focus === 'function') {
        previous.focus();
      }
    };
  }, [open, onClose, panelRef, closeOnEsc, initialFocusRef]);
}
