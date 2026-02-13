import type { Meta, StoryObj } from '@storybook/react';
import { useState } from 'react';
import { Button, Overlay } from '@malix/ui';

function OverlayExample() {
  const [open, setOpen] = useState(false);

  return (
    <>
      <Button hierarchy="primary" onClick={() => setOpen(true)}>
        Open glass overlay
      </Button>
      <Overlay open={open} onClose={() => setOpen(false)} title="Overlay glass">
        <p style={{ margin: 0 }}>This panel uses Malix glass tokens, blur and overlay elevation.</p>
      </Overlay>
    </>
  );
}

const meta = {
  title: 'Malix/Overlay',
  component: OverlayExample
} satisfies Meta<typeof OverlayExample>;

export default meta;
type Story = StoryObj<typeof meta>;

export const GlassOverlay: Story = {};
