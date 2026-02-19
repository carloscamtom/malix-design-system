import React from 'react';

export type SidebarPanelProps = React.HTMLAttributes<HTMLElement> & {
  collapsed?: boolean;
  logo?: React.ReactNode;
  navigation?: React.ReactNode;
  footer?: React.ReactNode;
  onToggleCollapse?: () => void;
};

export function SidebarPanel({
  collapsed = false,
  logo,
  navigation,
  footer,
  onToggleCollapse,
  className,
  ...props
}: SidebarPanelProps) {
  return (
    <aside
      className={`malix-sidebar-panel${className ? ` ${className}` : ''}`}
      data-collapsed={collapsed || undefined}
      {...props}
    >
      <div className="malix-sidebar-panel__top">
        <div className="malix-sidebar-panel__brand">
          {logo}
          {!collapsed && onToggleCollapse ? (
            <button
              type="button"
              className="malix-sidebar-panel__toggle"
              onClick={onToggleCollapse}
              aria-label="Collapse sidebar"
            >
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="3" width="18" height="18" rx="2" /><line x1="9" y1="3" x2="9" y2="21" /></svg>
            </button>
          ) : null}
          {collapsed && onToggleCollapse ? (
            <button
              type="button"
              className="malix-sidebar-panel__toggle"
              onClick={onToggleCollapse}
              aria-label="Expand sidebar"
            >
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="3" width="18" height="18" rx="2" /><line x1="9" y1="3" x2="9" y2="21" /><polyline points="14 9 17 12 14 15" /></svg>
            </button>
          ) : null}
        </div>
        <nav className="malix-sidebar-panel__nav">{navigation}</nav>
      </div>
      {footer ? (
        <div className="malix-sidebar-panel__bottom">{footer}</div>
      ) : null}
    </aside>
  );
}
