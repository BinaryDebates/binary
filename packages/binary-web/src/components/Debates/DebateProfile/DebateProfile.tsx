import React from 'react'

import DebateDescription from './DebateDescription'
import type Debate from 'models/Debate'
import { generateRandomDebate, totalPledges } from 'models/Debate'
import { Flex, Image, StackDivider, VStack } from '@chakra-ui/react'
import DebateProgress from './DebateProgress'
import { DebateParticipants } from './DebateParticipants'
import Leaderboard from './Leaderboard'
import Terms from './Terms'

export interface DebateProfileProps {
  debate: Debate
}

export function DebateProfile ({ debate }: DebateProfileProps): React.JSX.Element {
  const progress = totalPledges(debate)
  return (
    <Flex direction='column' alignContent='center' w="100%">
      <Image src={debate.imgRoute} alt={debate.name} height='300px' w='100%' top='80px' bottom='60px' />
      <VStack
        w='62.5%'
        marginX='auto'
        divider={<StackDivider />}
        spacing='30px'
      >
        <DebateDescription {...debate} progress={progress} />
        <DebateProgress {...debate} progress={progress} pledgeCount={debate.pledges.length} />
        <DebateParticipants {...debate} />
        <Leaderboard {...debate} />
        <Terms {...debate.terms} />
      </VStack>
    </Flex>
  )
}

export function DefaultDebateProfile (): React.JSX.Element {
  const debate = generateRandomDebate()
  return <DebateProfile debate={debate} />
}
