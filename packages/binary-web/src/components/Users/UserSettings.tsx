import React, { useState } from 'react'

import { Image, Input, Heading, Button, ButtonGroup, FormControl, FormLabel, Flex, Spacer, Text, Divider } from '@chakra-ui/react'
import type User from 'models/User'
import { generateRandomUser } from 'models/User'

export interface UserSettingsProps {
  user: User
  isSaved: boolean
  onSave: () => void
}

export default function UserSettings ({ user, onSave, isSaved }: UserSettingsProps): React.JSX.Element {
  return (
    <Flex
      direction='column'
      justifyItems='left'
      w='62.5%'
      marginX='auto'
    >
      <Flex justify='space-between'>
        <Heading>Settings</Heading>
        <Spacer />
        <ButtonGroup>
          <Button variant={isSaved ? 'solid' : 'outline'} onClick={onSave}>{isSaved ? 'Saved' : 'Save'}</Button>
        </ButtonGroup>
      </Flex>
      <Heading as="h2">Profile</Heading>
      <Image src={user.imgRoute} alt={user.name} boxSize="64px" borderRadius='50%'/>
      <FormControl>
        <FormLabel>Name</FormLabel>
        <Input defaultValue={user.name}/>
      </FormControl>
      <Divider />
      <Heading as="h2">Account</Heading>
      <Text>Connected Accounts</Text>
      <Divider />
      <Text>Would you like to delete your account and all associated data?</Text>
      <Button>Delete Account</Button>
    </Flex>
  )
}

export function DefaultUserSettings (): React.JSX.Element {
  const [isSaved, setIsSaved] = useState(false)
  return <UserSettings
    user={generateRandomUser()}
    isSaved={isSaved}
    onSave={() => { setIsSaved(!isSaved) }}
  />
}
