import React, { useState } from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import { ChatInput } from '@malix/ui';

function ChatInputExample({ placeholder, disabled }: { placeholder?: string; disabled?: boolean }) {
  const [value, setValue] = useState('');
  return (
    <ChatInput
      value={value}
      onChange={setValue}
      onSend={() => setValue('')}
      placeholder={placeholder}
      disabled={disabled}
    />
  );
}

const meta = {
  title: 'Malix/ChatInput',
  component: ChatInputExample,
} satisfies Meta<typeof ChatInputExample>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};

export const CustomPlaceholder: Story = {
  args: {
    placeholder: 'Ask anything...',
  },
};

export const Disabled: Story = {
  args: {
    disabled: true,
    placeholder: 'Chat is unavailable',
  },
};

export const WithPrefilledText: Story = {
  render: () => {
    const [value, setValue] = useState('Hello, how can I help?');
    return (
      <ChatInput
        value={value}
        onChange={setValue}
        onSend={() => setValue('')}
      />
    );
  },
};
