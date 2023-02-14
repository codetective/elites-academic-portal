import {
  Box,
  Button,
  Center,
  Flex,
  Heading,
  HStack,
  Image,
  Stack,
  Text,
} from '@chakra-ui/react';
import React, { useState, useEffect, useCallback } from 'react';
import { motion } from 'framer-motion';
import courses from '../courses';
import ListItem from './ListItem';
import config from '../config';
import em from '../assets/em.png';

const variantBox = {
  hidden: { opacity: 0.5, x: 50 },
  show: { opacity: 1, x: 0 },
};

function MaterialList({ entries, id }) {
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
            _hover={{
              bg: 'green.900',
            }}
          >
            All
          </Button>
          {id !== config.general && (
            <>
              <Button
                onClick={() => setViewing('ASSIGNMENT')}
                variant='outline'
                colorScheme='purple'
                bg={viewing === 'ASSIGNMENT' ? 'purple' : 'transparent'}
                _hover={{
                  bg: 'green.900',
                }}
              >
                Assignment
              </Button>
              <Button
                onClick={() => setViewing('SUMMARY')}
                variant='outline'
                colorScheme='purple'
                bg={viewing === 'SUMMARY' ? 'purple' : 'transparent'}
                _hover={{
                  bg: 'green.900',
                }}
              >
                Summary
              </Button>
            </>
          )}
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
                    _hover={{
                      bg: 'green.900',
                    }}
                  >
                    {course}{' '}
                  </Button>
                );
              }
            })}
        </Flex>
      </Box>
      <Stack gap='5' py='10'>
        <Box borderBottom='1px solid' pb='4' borderColor={'gray.600'}>
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
          <Center
            flexDir='column'
            gap='5'
            fontStyle={'oblique'}
            textAlign='center'
            color='red.300'
          >
            <Image src={em} alt='empty' h='100px' />
            {id === config.yearTwo && (
              <Heading fontSize='xl'>Wow! such empty</Heading>
            )}
            {id === config.yearThree && (
              <Heading fontSize='xl'>
                Nothing dey here! Year 3 ginger! &#9996;
              </Heading>
            )}
            {id === config.yearFour && (
              <Heading fontSize='xl'>
                Stare at this empty list for goodluck!
              </Heading>
            )}
            {id === config.yearFive && (
              <Heading fontSize='xl'> Year 5 no get materials for now </Heading>
            )}
            {id === config.general && (
              <Heading fontSize='xl'>No general materials posted yet</Heading>
            )}
          </Center>
        )}
      </Stack>
    </Box>
  );
}

export default MaterialList;
