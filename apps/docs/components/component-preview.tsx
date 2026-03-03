'use client';

import { useState, type ReactNode } from 'react';

type ComponentPreviewProps = {
  name?: string;
  children: ReactNode;
};

export function ComponentPreview({ children }: ComponentPreviewProps) {
  const [tab, setTab] = useState<'preview' | 'code'>('preview');

  return (
    <div className="not-prose relative my-6 rounded-xl border border-fd-border overflow-hidden">
      <div className="flex items-center border-b border-fd-border bg-fd-card px-4">
        <button
          onClick={() => setTab('preview')}
          className={`relative px-3 py-2.5 text-sm font-medium transition-colors ${
            tab === 'preview'
              ? 'text-fd-foreground after:absolute after:bottom-0 after:left-0 after:right-0 after:h-0.5 after:bg-fd-foreground'
              : 'text-fd-muted-foreground hover:text-fd-foreground'
          }`}
        >
          Preview
        </button>
        <button
          onClick={() => setTab('code')}
          className={`relative px-3 py-2.5 text-sm font-medium transition-colors ${
            tab === 'code'
              ? 'text-fd-foreground after:absolute after:bottom-0 after:left-0 after:right-0 after:h-0.5 after:bg-fd-foreground'
              : 'text-fd-muted-foreground hover:text-fd-foreground'
          }`}
        >
          Code
        </button>
      </div>

      {tab === 'preview' && (
        <div className="malix-preview-area flex min-h-[200px] items-center justify-center p-8" style={{ backgroundColor: 'var(--malix-surface)' }}>
          {children}
        </div>
      )}

      {tab === 'code' && (
        <div className="p-4 text-sm text-fd-muted-foreground bg-fd-card">
          <p>See the code examples below.</p>
        </div>
      )}
    </div>
  );
}
