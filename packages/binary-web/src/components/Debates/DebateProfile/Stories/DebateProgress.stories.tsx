import React from 'react'
import DebateProgress from '../DebateProgress'
import type { StoryObj } from '@storybook/react'
import { generateRandomDebate } from 'models/Debate'

export default {
  title: 'Debate Progress',
  component: DebateProgress
}

type Story = StoryObj<typeof DebateProgress>

const debate = generateRandomDebate()

export const Primary: Story = {
  render: () => <DebateProgress
    {...debate}
    progress={debate.pledges.reduce((partialSum, pledge) => partialSum + pledge.pledgeAmount, 0)}
    pledgeCount={debate.pledges.length}
  />
}
