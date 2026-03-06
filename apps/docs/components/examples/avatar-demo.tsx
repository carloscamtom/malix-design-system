'use client';

import { Avatar } from '@camtomlabs/malix-design-system';

export function AvatarDemo() {
  return (
    <div style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
      <Avatar initials="AJ" size={32} />
      <Avatar initials="BS" size={40} />
      <Avatar initials="CD" size={48} />
    </div>
  );
}
