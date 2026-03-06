'use client';

import { FlyoutMenu } from '@camtomlabs/malix-design-system';
import { LayoutDashboard, Circle, ScanText, Search, Users } from 'lucide-react';

export function FlyoutMenuDemo() {
  return (
    <div style={{ width: 220 }}>
      <FlyoutMenu
        items={[
          { icon: <LayoutDashboard size={16} />, label: 'Dashboard', active: true },
          { icon: <Circle size={16} />, label: 'Projects' },
          { icon: <ScanText size={16} />, label: 'DocExtract' },
          { icon: <Search size={16} />, label: 'Clasificacion' },
          { icon: <Users size={16} />, label: 'Mis Clientes' },
        ]}
      />
    </div>
  );
}
