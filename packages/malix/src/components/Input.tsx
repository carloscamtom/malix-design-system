import React from 'react';

export type InputProps = React.InputHTMLAttributes<HTMLInputElement> & {
  leadingIcon?: React.ReactNode;
};

export function Input({ leadingIcon, ...props }: InputProps) {
  return (
    <label className="malix-input-wrap">
      {leadingIcon ? <span className="malix-button__icon">{leadingIcon}</span> : null}
      <input className="malix-input" {...props} />
    </label>
  );
}

export function SearchInput(props: Omit<InputProps, 'type'>) {
  return <Input type="search" placeholder="Search" {...props} />;
}
