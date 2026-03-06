'use client';

import { FlyoutMenu } from '@camtomlabs/malix-design-system';
import { Settings, User, LogOut } from 'lucide-react';

export function FlyoutMenuDemo() {
  return (
    <div style={{ width: 220 }}>
      <FlyoutMenu
        items={[
          { icon: <User size={16} />, label: 'Profile', active: true },
          { icon: <Settings size={16} />, label: 'Settings' },
          { icon: <LogOut size={16} />, label: 'Log out' },
        ]}
      />
    </div>
  );
}
