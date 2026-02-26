'use client';

import { FileCard } from '@malix/ui';
import { FileText } from 'lucide-react';

export function FileCardDemo() {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 12, maxWidth: 360 }}>
      <FileCard
        fileName="quarterly-report.pdf"
        meta="2.4 MB"
        icon={<FileText size={20} />}
        onAction={() => {}}
      />
      <FileCard
        fileName="design-specs.fig"
        meta="18 MB"
        onAction={() => {}}
      />
    </div>
  );
}
