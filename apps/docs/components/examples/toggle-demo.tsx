'use client';

import { useState } from 'react';
import { Toggle } from '@camtomlabs/malix-design-system';

export function ToggleDemo() {
  const [checkedA, setCheckedA] = useState(false);
  const [checkedB, setCheckedB] = useState(true);
  const [checkedC, setCheckedC] = useState(true);

  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
      <Toggle checked={checkedA} onChange={setCheckedA} />
      <Toggle checked={checkedB} onChange={setCheckedB} />
      <Toggle checked={checkedC} onChange={setCheckedC} label="Enable notifications" />
    </div>
  );
}
