import React, { useState } from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import { SidebarPanel, SidebarItem, Avatar } from '@malix/ui';
import { Folder, Settings, LayoutDashboard, ScanText, ShieldCheck } from 'lucide-react';
import camtomLogo from './camtom-tim-logo.svg';
import camtomIsotype from './camtom-tim-isotype.svg';

/* ── Logo components ─────────────────────────── */

function FullLogo() {
  return <img src={camtomLogo} alt="Camtom" style={{ height: 28 }} />;
}

function Isotype({ showFull = false }: { showFull?: boolean }) {
  return showFull
    ? <img src={camtomLogo} alt="Camtom" style={{ height: 24 }} />
    : <img src={camtomIsotype} alt="Camtom" style={{ height: 28, width: 24 }} />;
}

/* ── Shared nav & footer ─────────────────────── */

const sampleNavigation = (
  <div style={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
    <SidebarItem icon={<LayoutDashboard size={20} />} active>Dashboard</SidebarItem>
    <SidebarItem icon={<Folder size={20} />}>Projects</SidebarItem>
    <SidebarItem icon={<ScanText size={20} />}>Classify</SidebarItem>
    <SidebarItem icon={<ShieldCheck size={20} />}>Compliance</SidebarItem>
    <SidebarItem icon={<Settings size={20} />}>Settings</SidebarItem>
  </div>
);

const collapsedNavigation = (
  <div style={{ display: 'flex', flexDirection: 'column', gap: 2, alignItems: 'center' }}>
    <SidebarItem icon={<LayoutDashboard size={20} />} active>{''}</SidebarItem>
    <SidebarItem icon={<Folder size={20} />}>{''}</SidebarItem>
    <SidebarItem icon={<ScanText size={20} />}>{''}</SidebarItem>
    <SidebarItem icon={<ShieldCheck size={20} />}>{''}</SidebarItem>
    <SidebarItem icon={<Settings size={20} />}>{''}</SidebarItem>
  </div>
);

function UserFooter() {
  return (
    <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
      <Avatar initials="CG" size={32} />
      <div style={{ display: 'flex', flexDirection: 'column', gap: 2, minWidth: 0 }}>
        <span style={{ fontSize: 13, fontWeight: 500, color: 'var(--malix-foreground)' }}>Carlos Garcia</span>
        <span style={{ fontSize: 11, color: 'var(--malix-foreground-secondary)' }}>Admin</span>
      </div>
    </div>
  );
}

function CollapsedUserFooter() {
  return (
    <div style={{ display: 'flex', justifyContent: 'center' }}>
      <Avatar initials="CG" size={32} />
    </div>
  );
}

/* ── Meta ─────────────────────────────────────── */

const meta = {
  title: 'Malix/SidebarPanel',
  component: SidebarPanel,
  args: {
    logo: <FullLogo />,
    navigation: sampleNavigation,
    footer: <UserFooter />,
  },
  decorators: [(Story) => <div style={{ height: 540 }}><Story /></div>],
} satisfies Meta<typeof SidebarPanel>;

export default meta;
type Story = StoryObj<typeof meta>;

/* ── Stories ──────────────────────────────────── */

export const Default: Story = {};

export const Collapsed: Story = {
  args: {
    collapsed: true,
    logo: <Isotype />,
    navigation: collapsedNavigation,
    footer: <CollapsedUserFooter />,
    onToggleCollapse: () => {},
  },
};

export const WithToggle: Story = {
  args: {
    onToggleCollapse: () => {},
  },
};

export const WithoutFooter: Story = {
  args: {
    footer: undefined,
  },
};

/**
 * Interactive example: collapsed sidebar expands the logo on hover,
 * switching the isotype for the full Camtom wordmark.
 */
export const HoverInteraction: Story = {
  render: () => {
    const [collapsed, setCollapsed] = useState(true);
    const [hovered, setHovered] = useState(false);

    return (
      <div style={{ display: 'flex', gap: 24, height: 540 }}>
        {/* Expanded */}
        <SidebarPanel
          logo={<FullLogo />}
          navigation={sampleNavigation}
          footer={<UserFooter />}
          onToggleCollapse={() => {}}
        />

        {/* Collapsed with hover interaction */}
        <div
          onMouseEnter={() => setHovered(true)}
          onMouseLeave={() => setHovered(false)}
          style={{ height: '100%' }}
        >
          <SidebarPanel
            logo={<Isotype showFull={hovered} />}
            navigation={collapsedNavigation}
            footer={<CollapsedUserFooter />}
            collapsed
            onToggleCollapse={() => setCollapsed(!collapsed)}
          />
        </div>
      </div>
    );
  },
};

export const FullExample: Story = {
  render: () => {
    const [collapsed, setCollapsed] = useState(false);
    const [hovered, setHovered] = useState(false);

    return (
      <div
        style={{ height: 540 }}
        onMouseEnter={() => collapsed && setHovered(true)}
        onMouseLeave={() => setHovered(false)}
      >
        <SidebarPanel
          logo={collapsed ? <Isotype showFull={hovered} /> : <FullLogo />}
          navigation={collapsed ? collapsedNavigation : sampleNavigation}
          footer={collapsed ? <CollapsedUserFooter /> : <UserFooter />}
          collapsed={collapsed}
          onToggleCollapse={() => { setCollapsed(!collapsed); setHovered(false); }}
        />
      </div>
    );
  },
};
