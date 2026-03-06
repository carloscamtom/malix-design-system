'use client';

import { Breadcrumb } from '@camtomlabs/malix-design-system';
import { Home } from 'lucide-react';

export function BreadcrumbDemo() {
  return (
    <Breadcrumb
      items={[
        { label: 'Home', href: '#', icon: <Home size={14} /> },
        { label: 'Projects', href: '#' },
        { label: 'Current Project' },
      ]}
    />
  );
}
