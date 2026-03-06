'use client';

import { SidebarItem } from '@camtomlabs/malix-design-system';
import { LayoutDashboard, Folder, Users, Settings } from 'lucide-react';

export function SidebarItemDemo() {
  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        gap: 2,
        background: '#fbfbfb',
        borderRadius: 12,
        padding: 12,
        width: 240,
      }}
    >
      <SidebarItem icon={<LayoutDashboard size={20} />} active>
        Dashboard
      </SidebarItem>
      <SidebarItem icon={<Folder size={20} />}>
        Projects
      </SidebarItem>
      <SidebarItem icon={<Users size={20} />}>
        Mis Clientes
      </SidebarItem>
      <SidebarItem icon={<Settings size={20} />}>
        Settings
      </SidebarItem>
    </div>
  );
}
