import {
  Box,
  Button,
  Center,
  Flex,
  Heading,
  HStack,
  Stack,
  StackDivider,
  Text,
} from '@chakra-ui/react';
import React, { useState, useEffect, useCallback } from 'react';
import { motion } from 'framer-motion';
import courses from '../courses';
import ListItem from './ListItem';

const variantBox = {
  hidden: { opacity: 0.5, x: 50 },
  show: { opacity: 1, x: 0 },
};

function MaterialList({ entries }) {
  const [viewing, setViewing] = useState(null);
  const [list, setList] = useState([]);

  const sortAndDisplay = useCallback(() => {
    if (!viewing) {
      return setList(entries[0].data);
    }

    return setList(
      entries[0].data.filter(
        (entry) =>
          entry.course_title_with_lecturer
            .toUpperCase()
            .indexOf(viewing.toUpperCase()) !== -1
      )
    );
  }, [entries, viewing]);
  useEffect(() => {
    sortAndDisplay();
  }, [sortAndDisplay, viewing]);

  return (
    <Box>
      <HStack justifyContent={'space-between'} pb='10'>
        <Box>
          <Text>Sort entries :</Text>
        </Box>
      </HStack>
      <Text pos='relative' top='-20px' fontSize={'small'}>
        Click below to see entries for ONLY selected course
      </Text>

      <Flex gap='5' flexWrap={'wrap'}>
        <Button
          onClick={() => setViewing(null)}
          variant='outline'
          colorScheme='purple'
          bg={!viewing ? 'purple' : 'transparent'}
        >
          All
        </Button>
        {courses &&
          courses.map((course) => {
            if (course.trim() !== '') {
              return (
                <Button
                  onClick={() => setViewing(course)}
                  variant='outline'
                  key={course + 'ccc'}
                  textTransform='uppercase'
                  colorScheme='purple'
                  bg={viewing === course ? 'purple' : 'transparent'}
                >
                  {course}{' '}
                </Button>
              );
            }
          })}
      </Flex>
      <Stack divider={<StackDivider />} gap='5' py='10'>
        <Box>
          <Text>
            Currently viewing from :{' '}
            <Text fontWeight='bold' as='span'>
              {viewing ? viewing : 'All'}
            </Text>
          </Text>
        </Box>
        <Stack gap='5' userSelect={'none'}>
          {list &&
            list
              .slice()
              .reverse()
              .map((entry) => {
                return (
                  <motion.div
                    className='box'
                    variants={variantBox}
                    key={entry.id}
                    initial='hidden'
                    animate='show'
                    exit='hidden'
                  >
                    <ListItem entry={entry} />
                  </motion.div>
                );
              })}
        </Stack>
        {list && list.length === 0 && (
          <Center flexDir='column' gap='5'>
            <Heading>Wow! such empty</Heading>
          </Center>
        )}
      </Stack>
    </Box>
  );
}

export default MaterialList;
