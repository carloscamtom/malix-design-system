'use client';

import { useState } from 'react';
import { Button, Overlay } from '@malix/ui';

export function OverlayDemo() {
  const [open, setOpen] = useState(false);

  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
      <Button hierarchy="primary" onClick={() => setOpen(true)}>
        Open Overlay
      </Button>
      <Overlay
        open={open}
        title="Overlay Panel"
        onClose={() => setOpen(false)}
      >
        <p>This is an overlay panel with supplementary content. Use it to display details without leaving the current page.</p>
      </Overlay>
    </div>
  );
}
