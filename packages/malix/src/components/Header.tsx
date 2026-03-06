import React from 'react';

export type HeaderProps = React.HTMLAttributes<HTMLElement> & {
  pageTitle: string;
  actions?: React.ReactNode;
};

export function Header({ pageTitle, actions, className, ...props }: HeaderProps) {
  return (
    <header
      className={`malix-header${className ? ` ${className}` : ''}`}
      {...props}
    >
      <div className="malix-header__left">
        <h1 className="malix-header__title">{pageTitle}</h1>
      </div>
      {actions ? (
        <div className="malix-header__right">{actions}</div>
      ) : null}
    </header>
  );
}
