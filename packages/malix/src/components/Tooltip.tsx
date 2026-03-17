import React, { useId, useState, useRef, useEffect, useCallback } from 'react';
import { createPortal } from 'react-dom';

export type TooltipPlacement = 'top' | 'bottom' | 'left' | 'right';

export type TooltipProps = {
  content: React.ReactNode;
  children: React.ReactElement;
  placement?: TooltipPlacement;
  /** Render tooltip via portal to avoid overflow:hidden clipping */
  usePortal?: boolean;
};

export function Tooltip({ content, children, placement = 'top', usePortal = false }: TooltipProps) {
  const [open, setOpen] = useState(false);
  const tooltipId = useId();
  const triggerRef = useRef<HTMLSpanElement>(null);
  const tooltipRef = useRef<HTMLSpanElement>(null);

  const updatePortalPosition = useCallback(() => {
    if (!usePortal || !open || !triggerRef.current || !tooltipRef.current) return;

    const triggerRect = triggerRef.current.getBoundingClientRect();
    const tooltipEl = tooltipRef.current;
    const gap = 8; // --malix-space-sm

    // Reset to measure natural size
    tooltipEl.style.left = '0';
    tooltipEl.style.top = '0';
    const tooltipRect = tooltipEl.getBoundingClientRect();

    let top = 0;
    let left = 0;

    switch (placement) {
      case 'top':
        top = triggerRect.top - tooltipRect.height - gap;
        left = triggerRect.left + triggerRect.width / 2 - tooltipRect.width / 2;
        break;
      case 'bottom':
        top = triggerRect.bottom + gap;
        left = triggerRect.left + triggerRect.width / 2 - tooltipRect.width / 2;
        break;
      case 'left':
        top = triggerRect.top + triggerRect.height / 2 - tooltipRect.height / 2;
        left = triggerRect.left - tooltipRect.width - gap;
        break;
      case 'right':
        top = triggerRect.top + triggerRect.height / 2 - tooltipRect.height / 2;
        left = triggerRect.right + gap;
        break;
    }

    tooltipEl.style.top = `${top}px`;
    tooltipEl.style.left = `${left}px`;
  }, [usePortal, open, placement]);

  useEffect(() => {
    updatePortalPosition();
  }, [updatePortalPosition]);

  const tooltipContent = open ? (
    <span
      ref={tooltipRef}
      role="tooltip"
      id={tooltipId}
      className="malix-tooltip"
      data-placement={placement}
      {...(usePortal ? { 'data-portal': '' } : {})}
    >
      {content}
    </span>
  ) : null;

  return (
    <span
      ref={triggerRef}
      className="malix-tooltip-wrap"
      onMouseEnter={() => setOpen(true)}
      onMouseLeave={() => setOpen(false)}
      onFocus={() => setOpen(true)}
      onBlur={() => setOpen(false)}
    >
      {React.cloneElement(children as React.ReactElement<any>, {
        'aria-describedby': open ? tooltipId : undefined
      })}
      {usePortal
        ? tooltipContent && createPortal(tooltipContent, document.body)
        : tooltipContent}
    </span>
  );
}
