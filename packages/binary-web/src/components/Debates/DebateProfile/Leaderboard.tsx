import React from 'react'
import { Box, Flex, Heading, SimpleGrid, Text } from '@chakra-ui/react'
import UserListItem from '../../Users/UserListItem'
import { type Pledge } from 'models/Debate'

export interface leaderboardProps {
  pledges: Pledge[]
}

export default function Leaderboard ({ pledges }: leaderboardProps): React.JSX.Element {
  return (
    <Box w='100%'>
      <Heading>Leaderboard</Heading>
      <SimpleGrid columns={2} spacingY='12px' spacingX='40px'>
        {pledges.map(({ user, pledgeAmount }) => {
          return (
            <Box key={user.userName}>
              <Flex>
                <Box w="50%"><UserListItem user={user} /></Box>
                <Text w="50%" align="right">${pledgeAmount}</Text>
              </Flex>
            </Box>
          )
        })}
      </SimpleGrid>
    </Box>
  )
}
