'use client';

import { InputGroup } from '@malix/ui';

export function InputGroupDemo() {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 16, maxWidth: 320 }}>
      <InputGroup
        label="Email"
        placeholder="you@example.com"
        helperText="We will never share your email."
      />
      <InputGroup
        label="Username"
        placeholder="Enter username"
        error
        helperText="This username is already taken."
      />
    </div>
  );
}
