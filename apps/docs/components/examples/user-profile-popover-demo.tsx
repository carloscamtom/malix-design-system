'use client';

import { UserProfilePopover, Avatar } from '@camtomlabs/malix-design-system';
import { Settings, CreditCard, HelpCircle } from 'lucide-react';

export function UserProfilePopoverDemo() {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 16, maxWidth: 300 }}>
      <UserProfilePopover
        name="Alice Johnson"
        email="alice@example.com"
        avatar={<Avatar initials="AJ" size={40} />}
        credits={250}
        menuItems={[
          { icon: <Settings size={16} />, label: 'Settings', onClick: () => {} },
          { icon: <CreditCard size={16} />, label: 'Billing', onClick: () => {} },
          { icon: <HelpCircle size={16} />, label: 'Help & Support', onClick: () => {} },
        ]}
        onLogout={() => {}}
      />
    </div>
  );
}
