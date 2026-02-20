import React, { useId, useState } from 'react';

export type TooltipPlacement = 'top' | 'bottom' | 'left' | 'right';

export type TooltipProps = {
  content: React.ReactNode;
  children: React.ReactElement;
  placement?: TooltipPlacement;
};

export function Tooltip({ content, children, placement = 'top' }: TooltipProps) {
  const [open, setOpen] = useState(false);
  const tooltipId = useId();

  return (
    <span
      className="malix-tooltip-wrap"
      onMouseEnter={() => setOpen(true)}
      onMouseLeave={() => setOpen(false)}
      onFocus={() => setOpen(true)}
      onBlur={() => setOpen(false)}
    >
      {React.cloneElement(children, {
        'aria-describedby': open ? tooltipId : undefined
      })}
      {open ? (
        <span role="tooltip" id={tooltipId} className="malix-tooltip" data-placement={placement}>
          {content}
        </span>
      ) : null}
    </span>
  );
}
