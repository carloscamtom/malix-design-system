'use client';

import { Textarea } from '@malix/ui';

export function TextareaDemo() {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 16, maxWidth: 400 }}>
      <Textarea
        label="Description"
        placeholder="Write a short description..."
        rows={3}
      />
      <Textarea
        label="Bio"
        placeholder="Tell us about yourself"
        rows={3}
        error
        errorMessage="Bio must be at least 20 characters."
      />
    </div>
  );
}
