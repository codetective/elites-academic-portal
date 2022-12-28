import { Box, Button, Text, Link } from '@chakra-ui/react';
import React from 'react';

function ListItem({ entry }) {
  return (
    <Box
      py='4'
      _hover={{ bg: 'whiteAlpha.50' }}
      borderLeft='4px solid'
      borderColor={'gray.700'}
      px='4'
    >
      <Text as='h3' fontSize='xl'>
        {entry.course_title_with_lecturer}
      </Text>
      <Box className='truncate' fontStyle={'oblique'} fontSize='sm'>
        {entry.link_to_drive_file}
      </Box>

      <Box pt='2'>
        <Button
          as={Link}
          href={entry.link_to_drive_file}
          target={'_blank'}
          size='sm'
        >
          View
        </Button>
      </Box>
    </Box>
  );
}

export default ListItem;
