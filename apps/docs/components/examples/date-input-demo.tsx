'use client';

import { useState } from 'react';
import { DateInput } from '@malix/ui';

export function DateInputDemo() {
  const [date, setDate] = useState('');

  return (
    <div style={{ maxWidth: 220 }}>
      <DateInput
        placeholder="dd/mm/yyyy"
        value={date}
        onChange={setDate}
      />
    </div>
  );
}
