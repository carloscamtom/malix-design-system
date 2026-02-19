import React from 'react';

export type UserProfileMenuItem = {
  icon?: React.ReactNode;
  label: string;
  onClick?: () => void;
};

export type UserProfilePopoverProps = React.HTMLAttributes<HTMLDivElement> & {
  name: string;
  email: string;
  avatar?: React.ReactNode;
  menuItems?: UserProfileMenuItem[];
  onLogout?: () => void;
  credits?: number;
};

export function UserProfilePopover({
  name,
  email,
  avatar,
  menuItems,
  onLogout,
  credits,
  className,
  ...props
}: UserProfilePopoverProps) {
  return (
    <div
      className={`malix-user-profile${className ? ` ${className}` : ''}`}
      {...props}
    >
      <div className="malix-user-profile__header">
        {avatar ? (
          <span className="malix-user-profile__avatar">{avatar}</span>
        ) : null}
        <div className="malix-user-profile__info">
          <span className="malix-user-profile__name">{name}</span>
          <span className="malix-user-profile__email">{email}</span>
        </div>
      </div>

      {credits !== undefined ? (
        <div className="malix-user-profile__credits">
          <span className="malix-user-profile__credits-label">Credits</span>
          <span className="malix-user-profile__credits-value">{credits}</span>
        </div>
      ) : null}

      {menuItems && menuItems.length > 0 ? (
        <>
          <hr className="malix-user-profile__divider" />
          <nav className="malix-user-profile__menu" role="menu">
            {menuItems.map((item, i) => (
              <button
                key={i}
                type="button"
                className="malix-user-profile__menu-item"
                role="menuitem"
                onClick={item.onClick}
              >
                {item.icon ? (
                  <span className="malix-user-profile__menu-item-icon">{item.icon}</span>
                ) : null}
                <span className="malix-user-profile__menu-item-label">{item.label}</span>
              </button>
            ))}
          </nav>
        </>
      ) : null}

      {onLogout ? (
        <>
          <hr className="malix-user-profile__divider" />
          <button
            type="button"
            className="malix-user-profile__logout"
            onClick={onLogout}
          >
            <svg
              width="16"
              height="16"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4" />
              <polyline points="16 17 21 12 16 7" />
              <line x1="21" y1="12" x2="9" y2="12" />
            </svg>
            <span>Log out</span>
          </button>
        </>
      ) : null}
    </div>
  );
}
