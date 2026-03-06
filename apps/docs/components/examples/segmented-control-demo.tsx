'use client';

import { useState } from 'react';
import { SegmentedControl } from '@camtomlabs/malix-design-system';

const items = [
  { label: 'Day', value: 'day' },
  { label: 'Week', value: 'week' },
  { label: 'Month', value: 'month' },
];

export function SegmentedControlDemo() {
  const [value, setValue] = useState('week');

  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
      <SegmentedControl items={items} value={value} onChange={setValue} />
    </div>
  );
}
