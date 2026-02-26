'use client';

import { GlassPopover } from '@malix/ui';

export function GlassPopoverDemo() {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
      <GlassPopover title="Quick Actions">
        <p>This popover uses a frosted-glass backdrop effect. Place contextual actions or brief information here.</p>
      </GlassPopover>
    </div>
  );
}
