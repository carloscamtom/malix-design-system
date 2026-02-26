'use client';

import { Card } from '@malix/ui';

export function CardDemo() {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 16, maxWidth: 400 }}>
      <Card level={1} title="Level 1" description="Default card with subtle background." />
      <Card level={2} title="Level 2" description="Mid-emphasis card for grouped content." />
      <Card level={3} title="Level 3" description="Highest-emphasis card for focused content." />
    </div>
  );
}
