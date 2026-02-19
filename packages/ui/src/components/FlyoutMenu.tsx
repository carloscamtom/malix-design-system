import React from 'react';

export type FlyoutMenuItem = {
  icon?: React.ReactNode;
  label: string;
  active?: boolean;
  onClick?: () => void;
};

export type FlyoutMenuProps = React.HTMLAttributes<HTMLDivElement> & {
  items: FlyoutMenuItem[];
};

export function FlyoutMenu({ items, className, ...props }: FlyoutMenuProps) {
  return (
    <nav
      className={`malix-flyout-menu${className ? ` ${className}` : ''}`}
      role="menu"
      {...props}
    >
      {items.map((item, i) => (
        <button
          key={i}
          type="button"
          className="malix-flyout-menu__item"
          data-active={item.active || undefined}
          role="menuitem"
          onClick={item.onClick}
        >
          {item.icon ? <span className="malix-flyout-menu__icon">{item.icon}</span> : null}
          <span className="malix-flyout-menu__label">{item.label}</span>
        </button>
      ))}
    </nav>
  );
}
