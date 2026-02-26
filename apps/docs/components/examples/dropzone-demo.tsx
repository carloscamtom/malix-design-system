'use client';

import { Dropzone } from '@malix/ui';

export function DropzoneDemo() {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 16, maxWidth: 480 }}>
      <Dropzone
        title="Upload your files"
        hint="PNG, JPG or PDF up to 10 MB"
        accept=".png,.jpg,.jpeg,.pdf"
        onDrop={((files: File[]) => console.log('Dropped files:', files)) as any}
      />
    </div>
  );
}
