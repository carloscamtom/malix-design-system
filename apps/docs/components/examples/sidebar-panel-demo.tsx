'use client';

import { useState } from 'react';
import { SidebarPanel, SidebarItem, Avatar } from '@camtomlabs/malix-design-system';
import { LayoutDashboard, Folder, ScanText, ShieldCheck, Building2, Package, Truck, FileText } from 'lucide-react';

export function SidebarPanelDemo() {
  const [collapsed, setCollapsed] = useState(false);

  return (
    <div style={{ height: 520, position: 'relative', borderRadius: 12, overflow: 'hidden', border: '1px solid #e5e7eb' }}>
      <SidebarPanel
        collapsed={collapsed}
        onToggleCollapse={() => setCollapsed((c) => !c)}
        logo={
          <span style={{ fontWeight: 700, fontSize: 18, color: '#111827' }}>camtom</span>
        }
        collapsedLogo={
          <span style={{ fontWeight: 700, fontSize: 16, color: '#111827' }}>C</span>
        }
        navigation={
          <>
            <SidebarItem icon={<LayoutDashboard size={20} />} active>
              Dashboard
            </SidebarItem>
            <SidebarItem icon={<Folder size={20} />}>
              Projects
            </SidebarItem>
            <SidebarItem icon={<ScanText size={20} />}>
              DocExtract
            </SidebarItem>
            <SidebarItem icon={<ShieldCheck size={20} />}>
              Clasificación
            </SidebarItem>
            <SidebarItem icon={<Building2 size={20} />}>
              Mis Clientes
            </SidebarItem>
            <SidebarItem icon={<Package size={20} />}>
              Productos
            </SidebarItem>
            <SidebarItem icon={<Truck size={20} />}>
              Simular Despacho
            </SidebarItem>
            <SidebarItem icon={<FileText size={20} />}>
              Digiter
            </SidebarItem>
          </>
        }
        footer={
          <div style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
            <Avatar initials="PR" size={36} />
            {!collapsed && (
              <div style={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
                <span style={{ fontSize: 13, fontWeight: 500, color: '#111827' }}>Pedro Rios</span>
                <span style={{ fontSize: 12, color: '#6b7280' }}>Operational</span>
              </div>
            )}
          </div>
        }
      />
    </div>
  );
}
