import React from 'react';

export type DividerProps = React.HTMLAttributes<HTMLHRElement>;

export function Divider({ className, ...props }: DividerProps) {
  return (
    <hr
      className={`malix-divider${className ? ` ${className}` : ''}`}
      {...props}
    />
  );
}
