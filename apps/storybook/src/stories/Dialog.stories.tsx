import React, { useState } from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import { Dialog, Button } from '@camtomlabs/malix-design-system';

function DefaultDialogExample() {
  const [open, setOpen] = useState(false);
  return (
    <>
      <Button hierarchy="primary" onClick={() => setOpen(true)}>
        Open dialog
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
    </>
  );
}

function DangerDialogExample() {
  const [open, setOpen] = useState(false);
  const [reason, setReason] = useState('');
  return (
    <>
      <Button hierarchy="danger" onClick={() => setOpen(true)}>
        Delete catalog
      </Button>
      <Dialog
        open={open}
        onClose={() => setOpen(false)}
        variant="danger"
        size="sm"
        role="alertdialog"
      >
        <Dialog.Header>Delete catalog?</Dialog.Header>
        <Dialog.Body>
          <p style={{ marginTop: 0 }}>
            This action cannot be undone. Please provide a reason for the
            audit log.
          </p>
          <textarea
            value={reason}
            onChange={(e) => setReason(e.target.value)}
            placeholder="Reason (required)"
            rows={3}
            style={{ width: '100%', marginTop: 8, padding: 8 }}
          />
        </Dialog.Body>
        <Dialog.Footer>
          <Button hierarchy="secondary" onClick={() => setOpen(false)}>
            Cancel
          </Button>
          <Button
            hierarchy="danger"
            onClick={() => setOpen(false)}
          >
            Delete
          </Button>
        </Dialog.Footer>
      </Dialog>
    </>
  );
}

const meta = {
  title: 'Malix/Dialog',
  component: DefaultDialogExample,
} satisfies Meta<typeof DefaultDialogExample>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};
export const DangerWithCustomBody: Story = {
  render: () => <DangerDialogExample />,
};
