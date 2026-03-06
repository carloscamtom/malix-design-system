'use client';

import { Badge } from '@camtomlabs/malix-design-system';

export function BadgeDemo() {
  return (
    <div style={{ display: 'flex', flexWrap: 'wrap', gap: 8, alignItems: 'center' }}>
      <Badge variant="default">Default</Badge>
      <Badge variant="primary">Primary</Badge>
      <Badge variant="success">Success</Badge>
      <Badge variant="warning">Warning</Badge>
      <Badge variant="error">Error</Badge>
      <Badge variant="primary" dot>
        With Dot
      </Badge>
    </div>
  );
}
