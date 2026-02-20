import React, { useState } from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import { SidebarPanel, SidebarItem, Avatar } from '@malix/ui';
import { Folder, LayoutDashboard, ScanText, ShieldCheck, Building2, Package, Truck, FileText } from 'lucide-react';
import camtomLogo from './camtom-tim-logo.svg';
import camtomIsotype from './camtom-tim-isotype.svg';

/* ── Logo components ─────────────────────────── */

function FullLogo() {
  return <img src={camtomLogo} alt="Camtom" style={{ height: 28 }} />;
}

function IsotypeLogo() {
  return <img src={camtomIsotype} alt="Camtom" style={{ height: 28, width: 28, objectFit: 'contain' }} />;
}

/* ── Shared navigation ───────────────────────── */

const sampleNavigation = (
  <>
    <SidebarItem icon={<LayoutDashboard size={20} />} active>Dashboard</SidebarItem>
    <SidebarItem icon={<Folder size={20} />}>Projects</SidebarItem>
    <SidebarItem icon={<ScanText size={20} />}>DocExtract</SidebarItem>
    <SidebarItem icon={<ShieldCheck size={20} />}>Clasificacion</SidebarItem>
    <SidebarItem icon={<Building2 size={20} />}>Mis Clientes</SidebarItem>
    <SidebarItem icon={<Package size={20} />}>Productos</SidebarItem>
    <SidebarItem icon={<Truck size={20} />}>Simular Despacho</SidebarItem>
    <SidebarItem icon={<FileText size={20} />}>Digiter</SidebarItem>
  </>
);

/* ── User footer ─────────────────────────────── */

function UserFooter() {
  return (
    <div style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
      <Avatar initials="PR" size={36} />
      <div style={{ display: 'flex', flexDirection: 'column', gap: 2, minWidth: 0 }}>
        <span style={{ fontFamily: 'var(--malix-font-body)', fontSize: 13, fontWeight: 500, color: 'var(--malix-foreground)' }}>Pedro Rios</span>
        <span style={{ fontFamily: 'var(--malix-font-body)', fontSize: 12, fontWeight: 400, color: 'var(--malix-foreground-secondary)' }}>Operational</span>
      </div>
    </div>
  );
}

function CollapsedFooter() {
  return (
    <div style={{ display: 'flex', justifyContent: 'center' }}>
      <Avatar initials="PR" size={32} />
    </div>
  );
}

/* ── Meta ─────────────────────────────────────── */

const meta = {
  title: 'Malix/SidebarPanel',
  component: SidebarPanel,
  decorators: [(Story) => <div style={{ height: 780 }}><Story /></div>],
} satisfies Meta<typeof SidebarPanel>;

export default meta;
type Story = StoryObj<typeof meta>;

/* ── Stories ──────────────────────────────────── */

/** Open sidebar: full logo + toggle chevron-left, nav with labels, user info at bottom */
export const Open: Story = {
  args: {
    logo: <FullLogo />,
    navigation: sampleNavigation,
    footer: <UserFooter />,
    onToggleCollapse: () => {},
  },
};

/** Closed sidebar: isotype only (no toggle visible), icon-only nav, avatar at bottom */
export const Closed: Story = {
  args: {
    collapsed: true,
    collapsedLogo: <IsotypeLogo />,
    navigation: sampleNavigation,
    footer: <CollapsedFooter />,
    onToggleCollapse: () => {},
  },
};

/**
 * Full interactive example: toggle between open and closed.
 * Hover on collapsed sidebar replaces isotype with the toggle chevron-right button.
 */
export const Interactive: Story = {
  render: () => {
    const [collapsed, setCollapsed] = useState(false);

    return (
      <SidebarPanel
        logo={<FullLogo />}
        collapsedLogo={<IsotypeLogo />}
        navigation={sampleNavigation}
        footer={collapsed ? <CollapsedFooter /> : <UserFooter />}
        collapsed={collapsed}
        onToggleCollapse={() => setCollapsed(!collapsed)}
      />
    );
  },
};

/** All three states side by side: Open, Closed, Closed-Hover */
export const AllStates: Story = {
  render: () => (
    <div style={{ display: 'flex', gap: 24, height: 780 }}>
      <SidebarPanel
        logo={<FullLogo />}
        navigation={sampleNavigation}
        footer={<UserFooter />}
        onToggleCollapse={() => {}}
      />
      <SidebarPanel
        collapsed
        collapsedLogo={<IsotypeLogo />}
        navigation={sampleNavigation}
        footer={<CollapsedFooter />}
        onToggleCollapse={() => {}}
      />
    </div>
  ),
};
