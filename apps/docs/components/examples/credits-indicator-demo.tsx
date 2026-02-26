'use client';

import { CreditsIndicator } from '@malix/ui';

export function CreditsIndicatorDemo() {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
      <CreditsIndicator remaining={1250} />
    </div>
  );
}
