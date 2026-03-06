import React from 'react';

export type FilterTabItem = {
  label: string;
  count?: number;
  value: string;
};

export type FilterTabsProps = Omit<React.HTMLAttributes<HTMLDivElement>, 'onChange'> & {
  items: FilterTabItem[];
  value: string;
  onChange: (value: string) => void;
};

export function FilterTabs({
  items,
  value,
  onChange,
  className,
  ...props
}: FilterTabsProps) {
  return (
    <div
      className={`malix-filter-tabs${className ? ` ${className}` : ''}`}
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
            className="malix-filter-tabs__tab"
            data-active={isActive || undefined}
            aria-selected={isActive}
            onClick={() => onChange(item.value)}
          >
            <span className="malix-filter-tabs__tab-label">{item.label}</span>
            {item.count != null ? (
              <span className="malix-filter-tabs__tab-count">{item.count}</span>
            ) : null}
          </button>
        );
      })}
    </div>
  );
}
