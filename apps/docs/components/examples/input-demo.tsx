'use client';

import { Input } from '@malix/ui';
import { Search } from 'lucide-react';

export function InputDemo() {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 12, maxWidth: 320 }}>
      <Input placeholder="Basic input" />
      <Input placeholder="Search..." leadingIcon={<Search size={16} />} />
    </div>
  );
}
