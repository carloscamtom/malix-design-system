'use client';

import { SectionHeader, Button } from '@camtomlabs/malix-design-system';
import { Plus } from 'lucide-react';

export function SectionHeaderDemo() {
  return (
    <div style={{ maxWidth: 600 }}>
      <SectionHeader
        title="Team members"
        description="Manage who has access to this project."
        actions={
          <Button
            hierarchy="primary"
            variant="leading-icon-text"
            icon={<Plus size={16} />}
          >
            Add member
          </Button>
        }
      />
    </div>
  );
}
