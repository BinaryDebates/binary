import React from 'react'
import Leaderboard from '../Leaderboard'
import type { StoryObj } from '@storybook/react'
import { generateRandomDebate } from 'models/Debate'

export default {
  title: 'Leaderboard',
  component: Leaderboard
}

type Story = StoryObj<typeof Leaderboard>

const debate = generateRandomDebate()

export const Primary: Story = {
  render: () => <Leaderboard {...debate} />
}
