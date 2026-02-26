'use client';

import { Pill } from '@malix/ui';

export function PillDemo() {
  return (
    <div style={{ display: 'flex', flexWrap: 'wrap', gap: 8, alignItems: 'center' }}>
      <Pill variant="default">Default</Pill>
      <Pill variant="primary">Primary</Pill>
      <Pill variant="success">Success</Pill>
      <Pill variant="error">Error</Pill>
      <Pill variant="warning">Warning</Pill>
      <Pill variant="info">Info</Pill>
    </div>
  );
}
