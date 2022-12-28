import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './index.css';
import { Box, ChakraProvider } from '@chakra-ui/react';
import appTheme from './theme';
import Navbar from './components/Navbar';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ChakraProvider theme={appTheme}>
      <Box as='main' h='100vh' overflowY='scroll'>
        <Navbar />
        <App />
      </Box>
    </ChakraProvider>
  </React.StrictMode>
);
