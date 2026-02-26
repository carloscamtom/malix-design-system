'use client';

import { StatusDot } from '@malix/ui';

export function StatusDotDemo() {
  return (
    <div style={{ display: 'flex', flexWrap: 'wrap', gap: 16, alignItems: 'center' }}>
      <StatusDot variant="success" label="Online" />
      <StatusDot variant="warning" label="Away" />
      <StatusDot variant="error" label="Offline" />
      <StatusDot variant="default" label="Unknown" />
    </div>
  );
}
