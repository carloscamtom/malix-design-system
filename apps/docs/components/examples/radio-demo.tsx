'use client';

import { useState } from 'react';
import { Radio } from '@malix/ui';

export function RadioDemo() {
  const [selected, setSelected] = useState('email');

  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 10 }}>
      <Radio
        name="contact"
        value="email"
        label="Email"
        checked={selected === 'email'}
        onChange={setSelected}
      />
      <Radio
        name="contact"
        value="phone"
        label="Phone"
        checked={selected === 'phone'}
        onChange={setSelected}
      />
      <Radio
        name="contact"
        value="sms"
        label="SMS"
        checked={selected === 'sms'}
        onChange={setSelected}
      />
    </div>
  );
}
