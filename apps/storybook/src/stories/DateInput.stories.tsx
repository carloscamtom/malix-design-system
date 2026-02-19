import type { Meta, StoryObj } from '@storybook/react';
import { DateInput } from '@malix/ui';

const meta = {
  title: 'Malix/DateInput',
  component: DateInput,
  args: {
    placeholder: 'dd/mm/yyyy',
  },
} satisfies Meta<typeof DateInput>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};

export const WithValue: Story = {
  args: {
    value: '2025-06-15',
  },
};

export const CustomPlaceholder: Story = {
  args: {
    placeholder: 'Select a date',
  },
};

export const Disabled: Story = {
  args: {
    value: '2025-06-15',
    disabled: true,
  },
};
