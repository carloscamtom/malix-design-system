'use client';

import { useState } from 'react';
import { Button, ConfirmDialog } from '@camtomlabs/malix-design-system';

export function ConfirmDialogDemo() {
  const [open, setOpen] = useState(false);

  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
      <Button hierarchy="danger" onClick={() => setOpen(true)}>
        Delete project
      </Button>
      <ConfirmDialog
        open={open}
        variant="danger"
        title="Delete project?"
        description="This will permanently delete the project and all its data. This action cannot be undone."
        confirmLabel="Delete"
        cancelLabel="Cancel"
        onConfirm={() => setOpen(false)}
        onCancel={() => setOpen(false)}
      />
    </div>
  );
}
