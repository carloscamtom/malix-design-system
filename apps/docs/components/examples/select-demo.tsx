'use client';

import { useState } from 'react';
import { Select } from '@camtomlabs/malix-design-system';

const options = [
  { value: 'react', label: 'React' },
  { value: 'vue', label: 'Vue' },
  { value: 'svelte', label: 'Svelte' },
  { value: 'angular', label: 'Angular' },
];

export function SelectDemo() {
  const [value, setValue] = useState('');

  return (
    <div style={{ maxWidth: 240 }}>
      <Select
        placeholder="Choose a framework"
        options={options}
        value={value}
        onChange={setValue}
      />
    </div>
  );
}
