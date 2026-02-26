'use client';

import { EmptyState, Button } from '@malix/ui';
import { FolderOpen, Plus } from 'lucide-react';

export function EmptyStateDemo() {
  return (
    <EmptyState
      icon={<FolderOpen size={24} />}
      title="No projects yet"
      description="Get started by creating your first project. You can organize your work and collaborate with your team."
      action={
        <Button hierarchy="primary" variant="leading-icon-text" icon={<Plus size={16} />}>
          Create Project
        </Button>
      }
    />
  );
}
