import { Box, Heading, HStack } from '@chakra-ui/react';
import React from 'react';
import WrapContent from './Layout/WrapContent';
import Logo from './Logo';

function Navbar() {
  return (
    <Box shadow='lg' py='5' pos='sticky' top='0' as='nav' zIndex={10}>
      <WrapContent>
        <HStack justifyContent={'space-between'}>
          <Logo />
          <Heading fontSize='28px' as='h1'>
            Rx 024
          </Heading>
        </HStack>
      </WrapContent>
    </Box>
  );
}

export default Navbar;
