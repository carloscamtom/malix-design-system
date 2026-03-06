'use client';

import { Header, Button } from '@camtomlabs/malix-design-system';
import { Plus } from 'lucide-react';

export function HeaderDemo() {
  return (
    <Header
      pageTitle="Dashboard"
      actions={
        <Button hierarchy="primary" variant="leading-icon-text" icon={<Plus size={16} />}>
          New Project
        </Button>
      }
    />
  );
}
