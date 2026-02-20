import React, { useState } from 'react';

export type SidebarPanelProps = React.HTMLAttributes<HTMLElement> & {
  collapsed?: boolean;
  logo?: React.ReactNode;
  collapsedLogo?: React.ReactNode;
  navigation?: React.ReactNode;
  footer?: React.ReactNode;
  onToggleCollapse?: () => void;
};

export function SidebarPanel({
  collapsed = false,
  logo,
  collapsedLogo,
  navigation,
  footer,
  onToggleCollapse,
  className,
  ...props
}: SidebarPanelProps) {
  const [hovered, setHovered] = useState(false);

  return (
    <aside
      className={`malix-sidebar-panel${className ? ` ${className}` : ''}`}
      data-collapsed={collapsed || undefined}
      onMouseEnter={collapsed ? () => setHovered(true) : undefined}
      onMouseLeave={collapsed ? () => setHovered(false) : undefined}
      {...props}
    >
      <div className="malix-sidebar-panel__top">
        <div className="malix-sidebar-panel__brand">
          {collapsed ? (
            /* Collapsed: show isotype by default, toggle button on hover */
            hovered && onToggleCollapse ? (
              <button
                type="button"
                className="malix-sidebar-panel__toggle"
                onClick={onToggleCollapse}
                aria-label="Expand sidebar"
              >
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="m9 18 6-6-6-6" />
                </svg>
              </button>
            ) : (
              <span className="malix-sidebar-panel__collapsed-logo">
                {collapsedLogo ?? logo}
              </span>
            )
          ) : (
            /* Expanded: logo + toggle button */
            <>
              {logo}
              {onToggleCollapse ? (
                <button
                  type="button"
                  className="malix-sidebar-panel__toggle"
                  onClick={onToggleCollapse}
                  aria-label="Collapse sidebar"
                >
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="m15 18-6-6 6-6" />
                  </svg>
                </button>
              ) : null}
            </>
          )}
        </div>
        <nav className="malix-sidebar-panel__nav">{navigation}</nav>
      </div>
      {footer ? (
        <div className="malix-sidebar-panel__bottom">{footer}</div>
      ) : null}
    </aside>
  );
}
