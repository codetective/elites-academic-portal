import { Heading } from '@chakra-ui/react';
import React from 'react';

function SectionTitle({ children }) {
  return (
    <Heading
      fontWeight={'300'}
      as='h2'
      textDecoration={'underline'}
      textDecorationThickness='1px'
      textUnderlineOffset='15px'
      lineHeight={1.5}
    >
      {children}
    </Heading>
  );
}

export default SectionTitle;
