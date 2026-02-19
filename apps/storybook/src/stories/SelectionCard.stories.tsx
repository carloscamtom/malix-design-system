import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import { SelectionCard } from '@malix/ui';
import { FileText, Image, Upload } from 'lucide-react';

const meta = {
  title: 'Malix/SelectionCard',
  component: SelectionCard,
  args: {
    title: 'Option A',
    description: 'A brief description of this selection option.',
    icon: <FileText size={24} />,
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
        icon={<FileText size={24} />}
        title="Document"
        description="Upload a document for processing."
        onClick={() => {}}
      />
      <SelectionCard
        icon={<Image size={24} />}
        title="Image"
        description="Upload an image for analysis."
        active
        onClick={() => {}}
      />
      <SelectionCard
        icon={<Upload size={24} />}
        title="Upload"
        description="Drag and drop or browse files."
        onClick={() => {}}
      />
    </div>
  ),
};
