import React from 'react';

export type TabItem = {
  label: string;
  value: string;
};

export type TabBarProps = Omit<React.HTMLAttributes<HTMLDivElement>, 'onChange'> & {
  items: TabItem[];
  value: string;
  onChange: (value: string) => void;
};

export function TabBar({
  items,
  value,
  onChange,
  className,
  ...props
}: TabBarProps) {
  return (
    <div
      className={`malix-tab-bar${className ? ` ${className}` : ''}`}
      role="tablist"
      {...props}
    >
      {items.map((item) => {
        const isActive = item.value === value;
        return (
          <button
            key={item.value}
            type="button"
            role="tab"
            className="malix-tab-bar__tab"
            data-active={isActive || undefined}
            aria-selected={isActive}
            onClick={() => onChange(item.value)}
          >
            <span className="malix-tab-bar__tab-label">{item.label}</span>
          </button>
        );
      })}
    </div>
  );
}
