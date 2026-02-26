'use client';

import { useState } from 'react';
import { LanguageSelector } from '@malix/ui';

const languages = [
  { value: 'en', label: 'English' },
  { value: 'es', label: 'Spanish' },
  { value: 'fr', label: 'French' },
];

export function LanguageSelectorDemo() {
  const [value, setValue] = useState('en');

  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
      <LanguageSelector
        value={value}
        options={languages}
        onChange={setValue}
      />
    </div>
  );
}
