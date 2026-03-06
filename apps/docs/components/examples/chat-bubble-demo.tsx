'use client';

import { ChatBubble } from '@camtomlabs/malix-design-system';

export function ChatBubbleDemo() {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 12, maxWidth: 380 }}>
      <ChatBubble variant="ai" message="Hello! How can I help you today?" />
      <ChatBubble variant="user" message="Can you explain the design tokens?" avatarInitials="CG" />
      <ChatBubble variant="ai" message="Sure! Design tokens are the smallest units of your design system — colors, spacing, radii, and typography values stored as CSS custom properties." />
    </div>
  );
}
