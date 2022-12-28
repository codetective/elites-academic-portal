import { Center, Heading, Image, Spinner } from '@chakra-ui/react';
import React from 'react';

import useGoogleSheets from 'use-google-sheets';
import MaterialList from './MaterialList';
import err from '../assets/error.png';

function Year({ id }) {
  const { data, loading, error } = useGoogleSheets({
    apiKey: import.meta.env.VITE_API_KEY,
    sheetId: import.meta.env.VITE_APP_GOOGLE_SHEETS_ID,
    sheetsOptions: [{ id: id }],
  });
  if (loading) {
    return (
      <Center flexDir='column' gap='5' p='5'>
        <Spinner size='xl' />
      </Center>
    );
  }

  if (error) {
    return (
      <Center
        flexDir='column'
        gap='5'
        fontStyle={'oblique'}
        textAlign='center'
        color='red.300'
      >
        <Image src={err} alt='error' h='100px' />
        <Heading fontSize='xl'>
          Something went wrong, please report this.
        </Heading>
      </Center>
    );
  }

  return <MaterialList entries={data} id={id} />;
}

export default Year;
