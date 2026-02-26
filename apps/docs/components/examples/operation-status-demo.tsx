'use client';

import { OperationStatus } from '@malix/ui';

export function OperationStatusDemo() {
  return (
    <div style={{ display: 'flex', flexWrap: 'wrap', gap: 16, alignItems: 'center' }}>
      <OperationStatus status="active" />
      <OperationStatus status="completed" />
      <OperationStatus status="failed" />
      <OperationStatus status="pending" />
    </div>
  );
}
