'use client';

import { useState } from 'react';
import { SidebarPanel, SidebarItem } from '@camtomlabs/malix-design-system';
import { Home, Settings, Users, BarChart3, HelpCircle } from 'lucide-react';

export function SidebarPanelDemo() {
  const [collapsed, setCollapsed] = useState(false);

  return (
    <div style={{ height: 480, position: 'relative', borderRadius: 12, overflow: 'hidden' }}>
      <SidebarPanel
        collapsed={collapsed}
        onToggleCollapse={() => setCollapsed((c) => !c)}
        logo={
          <span style={{ fontWeight: 700, fontSize: 16, color: '#fff' }}>Malix</span>
        }
        collapsedLogo={
          <span style={{ fontWeight: 700, fontSize: 16, color: '#fff' }}>M</span>
        }
        navigation={
          <>
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
          </>
        }
        footer={
          <SidebarItem icon={<HelpCircle size={18} />}>
            Help & Support
          </SidebarItem>
        }
      />
    </div>
  );
}
