'use client';

import { Tooltip, Button } from '@camtomlabs/malix-design-system';

export function TooltipDemo() {
  return (
    <div style={{ display: 'flex', flexWrap: 'wrap', gap: 16, padding: '48px 16px' }}>
      <Tooltip content="Tooltip on top" placement="top">
        <Button hierarchy="secondary">Top</Button>
      </Tooltip>
      <Tooltip content="Tooltip on bottom" placement="bottom">
        <Button hierarchy="secondary">Bottom</Button>
      </Tooltip>
      <Tooltip content="Tooltip on left" placement="left">
        <Button hierarchy="secondary">Left</Button>
      </Tooltip>
      <Tooltip content="Tooltip on right" placement="right">
        <Button hierarchy="secondary">Right</Button>
      </Tooltip>
    </div>
  );
}
