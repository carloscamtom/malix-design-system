'use client';

import { Button } from '@camtomlabs/malix-design-system';
import { Plus } from 'lucide-react';

export function ButtonDemo() {
  return (
    <div style={{ display: 'flex', flexWrap: 'wrap', gap: 12, alignItems: 'center' }}>
      <Button hierarchy="primary">Primary</Button>
      <Button hierarchy="secondary">Secondary</Button>
      <Button hierarchy="tertiary">Tertiary</Button>
      <Button hierarchy="ghost">Ghost</Button>
      <Button
        hierarchy="primary"
        variant="leading-icon-text"
        icon={<Plus size={16} />}
      >
        Add item
      </Button>
    </div>
  );
}
