import React from 'react'

import { Image, Text, HStack } from '@chakra-ui/react'
import type User from 'models/User'

export interface UserListItemProps {
  user: User
}

export default function UserListItem ({ user }: UserListItemProps): React.JSX.Element {
  return (
    <HStack spacing="10px">
      <Image src={user.imgRoute} alt={user.name} boxSize="32px" borderRadius='50%' />
      <Text isTruncated>{user.name}</Text>
    </HStack>
  )
}
