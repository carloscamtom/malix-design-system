'use client';

import { useState } from 'react';
import { Checkbox } from '@camtomlabs/malix-design-system';

export function CheckboxDemo() {
  const [checked, setChecked] = useState(false);

  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
      <Checkbox checked={false} label="Unchecked" />
      <Checkbox checked onChange={() => {}} label="Checked" />
      <Checkbox indeterminate label="Indeterminate" />
      <Checkbox
        checked={checked}
        onChange={setChecked}
        label="Accept terms and conditions"
      />
    </div>
  );
}
