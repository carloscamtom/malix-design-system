import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import { SelectionCard } from '@malix/ui';

function DocumentIcon() {
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8Z" />
      <path d="M14 2v6h6" />
      <path d="M16 13H8" />
      <path d="M16 17H8" />
      <path d="M10 9H8" />
    </svg>
  );
}

const meta = {
  title: 'Malix/SelectionCard',
  component: SelectionCard,
  args: {
    title: 'Option A',
    description: 'A brief description of this selection option.',
    icon: <DocumentIcon />,
  },
} satisfies Meta<typeof SelectionCard>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};

export const Active: Story = {
  args: {
    title: 'Selected Option',
    description: 'This card is in its active/selected state.',
    active: true,
  },
};

export const WithoutDescription: Story = {
  args: {
    title: 'Simple Option',
    description: undefined,
  },
};

export const WithoutIcon: Story = {
  args: {
    title: 'Text Only',
    description: 'A selection card without an icon.',
    icon: undefined,
  },
};

export const Clickable: Story = {
  args: {
    title: 'Clickable Card',
    description: 'Click this card to select it.',
    onClick: () => {},
  },
};

export const AllStates: Story = {
  render: () => (
    <div style={{ display: 'flex', gap: 16, flexWrap: 'wrap' }}>
      <SelectionCard
        icon={<DocumentIcon />}
        title="Document"
        description="Upload a document for processing."
        onClick={() => {}}
      />
      <SelectionCard
        icon={
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <rect x="3" y="3" width="18" height="18" rx="2" ry="2" />
            <circle cx="9" cy="9" r="2" />
            <path d="m21 15-3.086-3.086a2 2 0 0 0-2.828 0L6 21" />
          </svg>
        }
        title="Image"
        description="Upload an image for analysis."
        active
        onClick={() => {}}
      />
      <SelectionCard
        icon={
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
            <polyline points="17 8 12 3 7 8" />
            <line x1="12" y1="3" x2="12" y2="15" />
          </svg>
        }
        title="Upload"
        description="Drag and drop or browse files."
        onClick={() => {}}
      />
    </div>
  ),
};
