import React from 'react';

export type SidebarItemProps = React.ButtonHTMLAttributes<HTMLButtonElement> & {
  icon?: React.ReactNode;
  active?: boolean;
};

export function SidebarItem({
  icon,
  active = false,
  children,
  className,
  ...props
}: SidebarItemProps) {
  return (
    <button
      type="button"
      className={`malix-sidebar-item${className ? ` ${className}` : ''}`}
      data-active={active || undefined}
      aria-current={active ? 'page' : undefined}
      {...props}
    >
      {icon ? <span className="malix-sidebar-item__icon">{icon}</span> : null}
      <span className="malix-sidebar-item__label">{children}</span>
    </button>
  );
}
