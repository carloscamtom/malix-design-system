'use client';

import { SplitPane } from '@camtomlabs/malix-design-system';

export function SplitPaneDemo() {
  return (
    <div style={{ height: 240, border: '1px solid var(--border-default, #e2e2e2)', borderRadius: 8 }}>
      <SplitPane
        leftTitle="Editor"
        rightTitle="Preview"
        leftPanel={
          <div style={{ padding: 16 }}>
            <p style={{ margin: 0 }}>Write your content here.</p>
          </div>
        }
        rightPanel={
          <div style={{ padding: 16 }}>
            <p style={{ margin: 0 }}>Live preview of the output.</p>
          </div>
        }
        defaultSplit={50}
      />
    </div>
  );
}
