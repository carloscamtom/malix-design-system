import React, { useState } from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import { Modal, Button } from '@malix/ui';

function ModalExample() {
  const [open, setOpen] = useState(false);
  return (
    <>
      <Button hierarchy="primary" onClick={() => setOpen(true)}>Open Modal</Button>
      <Modal
        open={open}
        title="Modal Title"
        onClose={() => setOpen(false)}
        onConfirm={() => setOpen(false)}
        confirmLabel="Confirm"
        cancelLabel="Cancel"
      >
        <p style={{ margin: 0 }}>Modal content goes here. This is the body area where forms, confirmations, or informational content is placed.</p>
      </Modal>
    </>
  );
}

const meta = {
  title: 'Malix/Modal',
  component: ModalExample,
} satisfies Meta<typeof ModalExample>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};
