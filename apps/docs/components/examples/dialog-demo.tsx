'use client';

import { useState } from 'react';
import { Button, Dialog } from '@camtomlabs/malix-design-system';

export function DialogDemo() {
  const [open, setOpen] = useState(false);

  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
      <Button hierarchy="primary" onClick={() => setOpen(true)}>
        Open Dialog
      </Button>
      <Dialog open={open} onClose={() => setOpen(false)} size="md">
        <Dialog.Header>Edit catalog</Dialog.Header>
        <Dialog.Body>
          <p style={{ margin: 0 }}>
            Update the catalog details below. Changes are saved when you click
            &ldquo;Save changes&rdquo;.
          </p>
        </Dialog.Body>
        <Dialog.Footer>
          <Button hierarchy="secondary" onClick={() => setOpen(false)}>
            Cancel
          </Button>
          <Button hierarchy="primary" onClick={() => setOpen(false)}>
            Save changes
          </Button>
        </Dialog.Footer>
      </Dialog>
    </div>
  );
}

export function DialogDangerDemo() {
  const [open, setOpen] = useState(false);
  const [reason, setReason] = useState('');

  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
      <Button hierarchy="danger" onClick={() => setOpen(true)}>
        Delete catalog
      </Button>
      <Dialog
        open={open}
        onClose={() => {
          setOpen(false);
          setReason('');
        }}
        variant="danger"
        size="sm"
        role="alertdialog"
      >
        <Dialog.Header>Delete catalog?</Dialog.Header>
        <Dialog.Body>
          <p style={{ marginTop: 0 }}>
            This action cannot be undone. Please provide a reason for the audit
            log.
          </p>
          <textarea
            value={reason}
            onChange={(e) => setReason(e.target.value)}
            placeholder="Reason (required)"
            rows={3}
            style={{
              width: '100%',
              marginTop: 8,
              padding: 8,
              borderRadius: 6,
              border: '1px solid var(--malix-border)',
              background: 'var(--malix-input-bg)',
              color: 'var(--malix-foreground)',
              fontFamily: 'inherit',
              fontSize: 14,
              resize: 'vertical',
            }}
          />
        </Dialog.Body>
        <Dialog.Footer>
          <Button
            hierarchy="secondary"
            onClick={() => {
              setOpen(false);
              setReason('');
            }}
          >
            Cancel
          </Button>
          <Button
            hierarchy="danger"
            onClick={() => {
              setOpen(false);
              setReason('');
            }}
            disabled={reason.trim().length === 0}
          >
            Delete
          </Button>
        </Dialog.Footer>
      </Dialog>
    </div>
  );
}
