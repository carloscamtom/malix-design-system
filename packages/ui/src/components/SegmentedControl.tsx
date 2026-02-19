import React from 'react';

export type SegmentedControlItem = {
  label: string;
  value: string;
};

export type SegmentedControlProps = Omit<React.HTMLAttributes<HTMLDivElement>, 'onChange'> & {
  items: SegmentedControlItem[];
  value: string;
  onChange: (value: string) => void;
};

export function SegmentedControl({
  items,
  value,
  onChange,
  className,
  ...props
}: SegmentedControlProps) {
  return (
    <div
      className={`malix-segmented-control${className ? ` ${className}` : ''}`}
      role="radiogroup"
      {...props}
    >
      {items.map((item) => (
        <button
          key={item.value}
          type="button"
          className="malix-segmented-control__item"
          role="radio"
          aria-checked={item.value === value}
          data-active={item.value === value || undefined}
          onClick={() => onChange(item.value)}
        >
          {item.label}
        </button>
      ))}
    </div>
  );
}
