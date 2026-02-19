import React, { useState } from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import {
  Button, SearchInput, Tooltip,
  Divider, Avatar, Pill, InputGroup, Card,
  Header, SidebarItem, FlyoutMenu, Modal, GlassPopover,
} from '@malix/ui';
import {
  Home, Folder, Settings, CircleCheck, Search, Plus,
  LayoutDashboard, ScanText, ShieldCheck,
} from 'lucide-react';

function Showcase() {
  const [modalOpen, setModalOpen] = useState(false);

  return (
    <div style={{ fontFamily: 'var(--malix-font-body)', padding: 32, background: 'var(--malix-background-main)', color: 'var(--malix-foreground)', display: 'grid', gap: 32 }}>
      <h1 style={{ margin: 0, fontSize: 'var(--malix-text-2xl)', fontWeight: 600 }}>Malix Design System — Full Showcase</h1>

      {/* Buttons */}
      <section>
        <h2 style={{ margin: '0 0 12px', fontSize: 'var(--malix-text-lg)', fontWeight: 600 }}>Buttons</h2>
        <div style={{ display: 'flex', gap: 12, flexWrap: 'wrap', alignItems: 'center' }}>
          <Button hierarchy="primary" variant="leading-icon-text" icon={<Plus size={16} />}>Primary</Button>
          <Button hierarchy="secondary" variant="leading-icon-text" icon={<Folder size={16} />}>Secondary</Button>
          <Button hierarchy="tertiary" variant="leading-icon-text" icon={<Settings size={16} />}>Tertiary</Button>
          <Button hierarchy="ghost">Ghost</Button>
          <Tooltip content="Icon-only button"><Button hierarchy="ghost" variant="icon-only" icon={<Settings size={16} />} label="Settings" /></Tooltip>
        </div>
      </section>

      <Divider />

      {/* Pills */}
      <section>
        <h2 style={{ margin: '0 0 12px', fontSize: 'var(--malix-text-lg)', fontWeight: 600 }}>Pills</h2>
        <div style={{ display: 'flex', gap: 8, flexWrap: 'wrap' }}>
          <Pill variant="default">Default</Pill>
          <Pill variant="primary">Primary</Pill>
          <Pill variant="success">Success</Pill>
          <Pill variant="error">Error</Pill>
          <Pill variant="warning">Warning</Pill>
          <Pill variant="info">Info</Pill>
        </div>
      </section>

      <Divider />

      {/* Avatar */}
      <section>
        <h2 style={{ margin: '0 0 12px', fontSize: 'var(--malix-text-lg)', fontWeight: 600 }}>Avatar</h2>
        <div style={{ display: 'flex', gap: 12, alignItems: 'center' }}>
          <Avatar initials="PR" size={32} />
          <Avatar initials="CG" size={40} />
          <Avatar initials="MX" size={48} />
        </div>
      </section>

      <Divider />

      {/* Inputs */}
      <section>
        <h2 style={{ margin: '0 0 12px', fontSize: 'var(--malix-text-lg)', fontWeight: 600 }}>Input Group &amp; Search</h2>
        <div style={{ display: 'flex', gap: 24, flexWrap: 'wrap' }}>
          <InputGroup label="Label" placeholder="Placeholder text..." helperText="Helper text goes here" />
          <div style={{ width: 360 }}>
            <SearchInput leadingIcon={<Search size={16} />} placeholder="Busca por nombre o referencia" />
          </div>
        </div>
      </section>

      <Divider />

      {/* Cards */}
      <section>
        <h2 style={{ margin: '0 0 12px', fontSize: 'var(--malix-text-lg)', fontWeight: 600 }}>Cards</h2>
        <div style={{ display: 'flex', gap: 24, flexWrap: 'wrap' }}>
          <Card level={1} title="Level 1" description="Subtle shadow for content cards." />
          <Card level={2} title="Level 2" description="Medium shadow for elevated panels." />
          <Card level={3} title="Level 3" description="Strong shadow for modals and overlays." />
        </div>
      </section>

      <Divider />

      {/* Header */}
      <section>
        <h2 style={{ margin: '0 0 12px', fontSize: 'var(--malix-text-lg)', fontWeight: 600 }}>Header</h2>
        <Header pageTitle="Dashboard" actions={<Button hierarchy="secondary" variant="leading-icon-text" icon={<CircleCheck size={16} />}>Actividad</Button>} />
      </section>

      <Divider />

      {/* Sidebar Items */}
      <section>
        <h2 style={{ margin: '0 0 12px', fontSize: 'var(--malix-text-lg)', fontWeight: 600 }}>Sidebar Items</h2>
        <div style={{ width: 240, display: 'flex', flexDirection: 'column', gap: 2 }}>
          <SidebarItem icon={<Home size={20} />} active>Dashboard</SidebarItem>
          <SidebarItem icon={<Folder size={20} />}>Projects</SidebarItem>
        </div>
      </section>

      <Divider />

      {/* Flyout Menu */}
      <section>
        <h2 style={{ margin: '0 0 12px', fontSize: 'var(--malix-text-lg)', fontWeight: 600 }}>Flyout Menu</h2>
        <FlyoutMenu items={[
          { icon: <LayoutDashboard size={16} />, label: 'Dashboard', active: true },
          { icon: <Folder size={16} />, label: 'Projects' },
          { icon: <ScanText size={16} />, label: 'Classify' },
          { icon: <ShieldCheck size={16} />, label: 'Compliance' },
        ]} />
      </section>

      <Divider />

      {/* Glass Popover */}
      <section>
        <h2 style={{ margin: '0 0 12px', fontSize: 'var(--malix-text-lg)', fontWeight: 600 }}>Glass Popover</h2>
        <GlassPopover title="Glass Overlay" onClose={() => {}}>
          Glassmorphism overlay with translucent background, blur, and Level 3 elevation.
        </GlassPopover>
      </section>

      <Divider />

      {/* Modal */}
      <section>
        <h2 style={{ margin: '0 0 12px', fontSize: 'var(--malix-text-lg)', fontWeight: 600 }}>Modal</h2>
        <Button hierarchy="primary" onClick={() => setModalOpen(true)}>Open Modal</Button>
        <Modal open={modalOpen} title="Modal Title" onClose={() => setModalOpen(false)} onConfirm={() => setModalOpen(false)}>
          <p style={{ margin: 0 }}>Modal content goes here with forms, confirmations, or informational content.</p>
        </Modal>
      </section>
    </div>
  );
}

const meta = {
  title: 'Malix/Showcase',
  component: Showcase,
} satisfies Meta<typeof Showcase>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Page: Story = {};
