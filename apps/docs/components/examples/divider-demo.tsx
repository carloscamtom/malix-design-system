'use client';

import { Divider } from '@camtomlabs/malix-design-system';

export function DividerDemo() {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 8, maxWidth: 400 }}>
      <p style={{ margin: 0 }}>Content above the divider</p>
      <Divider />
      <p style={{ margin: 0 }}>Content below the divider</p>
    </div>
  );
}
