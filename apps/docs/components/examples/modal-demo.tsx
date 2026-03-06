'use client';

import { useState } from 'react';
import { Button, Modal } from '@camtomlabs/malix-design-system';

export function ModalDemo() {
  const [open, setOpen] = useState(false);

  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
      <Button hierarchy="primary" onClick={() => setOpen(true)}>
        Open Modal
      </Button>
      <Modal
        open={open}
        title="Confirm Action"
        onClose={() => setOpen(false)}
        onConfirm={() => setOpen(false)}
        confirmLabel="Yes, continue"
        cancelLabel="Cancel"
      >
        <p>Are you sure you want to proceed? This action cannot be undone.</p>
      </Modal>
    </div>
  );
}
