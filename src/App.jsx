import './App.css';
import { Box, SimpleGrid, Stack, Text } from '@chakra-ui/react';
import SectionTitle from './components/SectionTitle';
import WrapContent from './components/Layout/WrapContent';

import useGoogleSheets from 'use-google-sheets';
import MaterialList from './components/MaterialList';

const App = () => {
  const { data, loading, error } = useGoogleSheets({
    apiKey: import.meta.env.VITE_API_KEY,
    sheetId: import.meta.env.VITE_APP_GOOGLE_SHEETS_ID,
  });
  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error!</div>;
  }

  // return <div>{JSON.stringify(data)}</div>;

  return (
    <Box>
      <WrapContent>
        <Box py='80px'>
          <SimpleGrid columns={[1, 1, 1, 2]} spacing='10' pos='relative'>
            <Box
              pos={['static', 'static', 'static', 'sticky']}
              top='150px'
              h='fit-content'
            >
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
            <Stack spacing='5'>
              <MaterialList entries={data} />
            </Stack>
          </SimpleGrid>
        </Box>
      </WrapContent>
    </Box>
  );
};

export default App;
