'use client';

import { useState } from 'react';
import { SelectGroup, Select } from '@malix/ui';

const options = [
  { value: 'us', label: 'United States' },
  { value: 'uk', label: 'United Kingdom' },
  { value: 'de', label: 'Germany' },
  { value: 'jp', label: 'Japan' },
];

export function SelectGroupDemo() {
  const [value, setValue] = useState('');

  return (
    <div style={{ maxWidth: 280 }}>
      <SelectGroup label="Country" helperText="Select your country of residence.">
        <Select
          placeholder="Select a country"
          options={options}
          value={value}
          onChange={setValue}
        />
      </SelectGroup>
    </div>
  );
}
