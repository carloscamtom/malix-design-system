import { createElement, forwardRef } from 'react';
import type { ComponentType, SVGProps } from 'react';

export type IconSize = 'xs' | 'sm' | 'md' | 'lg' | 'xl' | number;

/**
 * Minimal shape that any icon component (lucide-react, phosphor-react,
 * custom SVGs) must satisfy. We accept any React component that takes
 * SVG props so consumers can bring their own icon library and still
 * get consistent sizing and theming.
 */
export type IconComponent = ComponentType<SVGProps<SVGSVGElement> & { size?: number | string }>;

export interface IconProps extends Omit<SVGProps<SVGSVGElement>, 'children' | 'ref'> {
  /** The icon component to render (e.g. any lucide-react icon) */
  as: IconComponent;
  /** Visual size — tokens or raw px. Default: 'md' (16px) */
  size?: IconSize;
  /** Accessible label. If omitted, icon is decorative (aria-hidden) */
  label?: string;
}

const SIZE_MAP: Record<Exclude<IconSize, number>, number> = {
  xs: 12,
  sm: 14,
  md: 16,
  lg: 20,
  xl: 24,
};

function resolveSize(size: IconSize): number {
  return typeof size === 'number' ? size : SIZE_MAP[size];
}

/**
 * Canonical icon wrapper. Takes any icon component and renders it
 * with consistent sizing aligned to Malix typography tokens and
 * `currentColor` so the icon inherits text color.
 *
 * @example
 * import { Icon } from '@camtomlabs/malix-design-system';
 * import { Plus, Search } from 'lucide-react';
 *
 * <Icon as={Plus} size="md" label="Add item" />
 * <Icon as={Search} size="sm" />  // decorative
 */
export const Icon = forwardRef<SVGSVGElement, IconProps>(function Icon(
  { as: Component, size = 'md', label, ...props },
  ref,
) {
  const pixelSize = resolveSize(size);
  const a11y = label
    ? { role: 'img', 'aria-label': label }
    : { 'aria-hidden': true, focusable: false as const };

  return createElement(Component, {
    ref,
    width: pixelSize,
    height: pixelSize,
    color: 'currentColor',
    ...a11y,
    ...props,
  });
});
