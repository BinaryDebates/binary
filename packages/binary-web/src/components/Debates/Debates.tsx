import React, { useCallback } from 'react';
// import { Box, Flex, Heading, Text } from '@chakra-ui/react';
// import { generateRandomDebate } from 'models/Debate';
// import DebateListItem from './DebateListItem';
import axios from 'axios';

// const debates = [...Array(7)].map(() => {
//   return generateRandomDebate();
// });

export const Debates = (): React.JSX.Element => {
  const loginFunc = useCallback(async (): Promise<void> => {
    console.log('HERE');
    try {
      await axios.post('/api/user/register', {
        id: '22345',
        name: 'TONYY',
        email: 'test',
        token: '1123',
        password: 'davis123',
      });
    } catch (e) {
      console.log(e);
    }
  }, []);
  return (
    <button
      onClick={() => {
        void (async () => {
          await loginFunc();
        })();
      }}
    >
      {' '}
      LOGIN
    </button>
    // <Flex direction="column" w="62.5%" marginX="auto" gap="40px">
    //   <Box>
    //     <Heading>Requests for Debates</Heading>
    //     <Text>Vote on the matchups you want to see</Text>
    //   </Box>
    //   {debates.map((debate) => {
    //     return <DebateListItem {...debate} pledgeAmount={totalPledges(debate)} link="/debateProfile" key={debate.id} />;
    //   })}
    // </Flex>
  );
};
