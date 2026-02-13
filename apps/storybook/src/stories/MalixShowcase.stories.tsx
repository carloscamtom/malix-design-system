import type { Meta, StoryObj } from '@storybook/react';
import { useState } from 'react';
import { Button, SearchInput, Tooltip, Overlay } from '@malix/ui';

function Showcase() {
  const [open, setOpen] = useState(false);

  return (
    <div
      style={{
        fontFamily: 'var(--malix-font-body)',
        padding: 'var(--malix-space-2xl)',
        background: 'var(--malix-background-main)',
        color: 'var(--malix-foreground)',
        display: 'grid',
        gap: 'var(--malix-space-xl)'
      }}
    >
      <h1 style={{ margin: 0, fontSize: 'var(--malix-text-2xl)' }}>Malix Showcase</h1>
      <div style={{ display: 'flex', gap: 'var(--malix-space-md)', flexWrap: 'wrap' }}>
        <Button hierarchy="primary">Primary CTA</Button>
        <Button hierarchy="secondary" variant="leading-icon-text" icon="📁">
          Secondary
        </Button>
        <Tooltip content="Icon-only buttons must include aria-label.">
          <Button hierarchy="ghost" variant="icon-only" icon="⚙️" label="Settings" />
        </Tooltip>
      </div>
      <SearchInput leadingIcon="🔎" placeholder="Search with depth token" />
      <div>
        <Button hierarchy="primary" onClick={() => setOpen(true)}>
          Open Overlay
        </Button>
      </div>
      <Overlay open={open} onClose={() => setOpen(false)} title="Glass Overlay">
        <p style={{ margin: 0 }}>ESC closes this modal and focus stays trapped while open.</p>
      </Overlay>
    </div>
  );
}

const meta = {
  title: 'Malix/Showcase',
  component: Showcase
} satisfies Meta<typeof Showcase>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Page: Story = {};
