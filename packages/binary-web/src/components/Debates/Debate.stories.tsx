import Debate from './Debate';
import type { StoryObj } from '@storybook/react';

export default {
  title: 'Debate Requests',
  component: Debate,
}

type Story = StoryObj<typeof Debate>;

export const Primary: Story = {
  render: () => <Debate />,
};