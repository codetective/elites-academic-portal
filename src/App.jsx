import './App.css';
import {
  Box,
  Container,
  SimpleGrid,
  Stack,
  Tab,
  TabList,
  TabPanel,
  TabPanels,
  Tabs,
  Text,
} from '@chakra-ui/react';
import SectionTitle from './components/SectionTitle';
import config from './config';
import Year from './components/Year';

const App = () => {
  return (
    <Box>
      <Container maxW='container.lg'>
        <Box py='80px'>
          <SimpleGrid columns={[1, 1, 1, 1]} spacing='10' pos='relative'>
            <Box>
              <Stack spacing='5'>
                <SectionTitle>Elites&apos; Academic Repository</SectionTitle>

                <Text fontSize='xl'>
                  Find materials, notes, past question papers and other useful
                  materials for the ELITES class. This project was created for
                  the academic team to have a central point to organize all
                  necessary materials for the Elites.
                </Text>
              </Stack>
            </Box>
            <Stack spacing='5' pb='40px'>
              <Box py='5'>
                <Text fontSize='xl' as='h1' fontWeight={'bold'}>
                  What are you here for?
                </Text>
                <Text fontWeight={'light'}>
                  Click the tabs below to toggle through available materials
                </Text>
              </Box>
              <Tabs
                defaultIndex={config.curentIndex}
                isLazy
                isFitted
                variant='enclosed'
                colorScheme='purple'
              >
                <TabList>
                  <Tab>Rx2</Tab>
                  <Tab>Rx3</Tab>
                  <Tab>Rx4</Tab>
                  <Tab>Rx5</Tab>
                  <Tab>Misc</Tab>
                </TabList>
                <TabPanels>
                  <TabPanel minH='60vh'>
                    <Year id={config.yearTwo} />
                  </TabPanel>
                  <TabPanel minH='60vh'>
                    <Year id={config.yearThree} />
                  </TabPanel>
                  <TabPanel minH='60vh'>
                    <Year id={config.yearFour} />
                  </TabPanel>
                  <TabPanel minH='60vh'>
                    <Year id={config.yearFive} />
                  </TabPanel>
                  <TabPanel minH='60vh'>
                    <Year id={config.general} />
                  </TabPanel>
                </TabPanels>
              </Tabs>
            </Stack>
          </SimpleGrid>
        </Box>
      </Container>
    </Box>
  );
};

export default App;
