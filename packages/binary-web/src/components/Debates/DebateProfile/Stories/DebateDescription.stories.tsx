import React from 'react'
import DebateDescription from '../DebateDescription'
import type { StoryObj } from '@storybook/react'
import { generateRandomDebate, totalPledges } from 'models/Debate'

export default {
  title: 'Debate Description',
  component: DebateDescription
}

type Story = StoryObj<typeof DebateDescription>

const debate = generateRandomDebate()

export const Primary: Story = {
  render: () => <DebateDescription
    {...debate}
    progress={totalPledges(debate)}
  />
}
