'use client';

import { useState } from 'react';
import { FilterTabs } from '@camtomlabs/malix-design-system';

export function FilterTabsDemo() {
  const [value, setValue] = useState('all');

  return (
    <FilterTabs
      value={value}
      onChange={setValue}
      items={[
        { label: 'All', value: 'all', count: 128 },
        { label: 'Active', value: 'active', count: 54 },
        { label: 'Completed', value: 'completed', count: 74 },
      ]}
    />
  );
}
