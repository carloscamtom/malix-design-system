'use client';

import { SidebarItem } from '@camtomlabs/malix-design-system';
import { Home, Settings, Users, BarChart3 } from 'lucide-react';

export function SidebarItemDemo() {
  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        gap: 4,
        background: '#0f1117',
        borderRadius: 12,
        padding: 12,
        width: 240,
      }}
    >
      <SidebarItem icon={<Home size={18} />} active>
        Home
      </SidebarItem>
      <SidebarItem icon={<BarChart3 size={18} />}>
        Analytics
      </SidebarItem>
      <SidebarItem icon={<Users size={18} />}>
        Team
      </SidebarItem>
      <SidebarItem icon={<Settings size={18} />}>
        Settings
      </SidebarItem>
    </div>
  );
}
