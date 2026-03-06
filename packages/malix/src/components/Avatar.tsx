import React from 'react';

export type AvatarProps = React.HTMLAttributes<HTMLSpanElement> & {
  initials: string;
  size?: number;
};

export function Avatar({ initials, size = 40, className, style, ...props }: AvatarProps) {
  return (
    <span
      className={`malix-avatar${className ? ` ${className}` : ''}`}
      style={{ width: size, height: size, borderRadius: size * 0.35, ...style }}
      {...props}
    >
      <span className="malix-avatar__text">{initials}</span>
    </span>
  );
}
