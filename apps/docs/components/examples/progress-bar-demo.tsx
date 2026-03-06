'use client';

import { ProgressBar } from '@camtomlabs/malix-design-system';

export function ProgressBarDemo() {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 20, maxWidth: 400 }}>
      <ProgressBar value={25} label="Uploading" />
      <ProgressBar value={50} label="Processing" />
      <ProgressBar value={75} label="Almost there" />
      <ProgressBar value={100} label="Complete" variant="success" />
    </div>
  );
}
