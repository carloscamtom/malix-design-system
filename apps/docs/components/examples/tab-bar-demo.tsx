'use client';

import { useState } from 'react';
import { TabBar } from '@camtomlabs/malix-design-system';

export function TabBarDemo() {
  const [value, setValue] = useState('overview');

  return (
    <TabBar
      value={value}
      onChange={setValue}
      items={[
        { label: 'Overview', value: 'overview' },
        { label: 'Activity', value: 'activity' },
        { label: 'Settings', value: 'settings' },
      ]}
    />
  );
}
