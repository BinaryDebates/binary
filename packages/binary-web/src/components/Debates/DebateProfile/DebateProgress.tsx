import React from 'react'

import { Text, Box, Heading, Progress, Flex } from '@chakra-ui/react'

interface DebateProgressProps {
  goal: number
  progress: number
  date: Date
  pledgeCount: number
}

export default function DebateProgress ({ goal, progress, date, pledgeCount }: DebateProgressProps): React.JSX.Element {
  return (
    <Box w='100%'>
      <Heading>Progress</Heading>
      <Flex>
        <Text w='50%' align="left">${progress} Plegded by {pledgeCount} backers</Text>
        <Text w='50%' align="right">${goal} goal by {date.toLocaleString()}</Text>
      </Flex>
      <Progress value={progress / goal * 100} size="md" colorScheme='pink' height='10px'/>
    </Box>
  )
}
