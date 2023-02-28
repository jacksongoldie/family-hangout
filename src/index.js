import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { BrowserRouter } from "react-router-dom";
import App from './components/App';
import { extendTheme, ChakraProvider } from '@chakra-ui/react'


const theme = extendTheme({ 
  fonts: {
    body: "system-ui, sans-serif",
    heading: "Georgia, serif",
    mono: "Menlo, monospace",
  },
  fontSizes: {
    xs: "0.75rem",
    sm: "0.875rem",
    md: "1rem",
    lg: "1.125rem",
    xl: "1.25rem",
  },
  colors: {
    red: '#F56565',
    teal: '#0097b2',
    orange: '#DD6B20',
    green: '#48BB78',
    pink: '#F687B3'
  }
 })

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <ChakraProvider theme={theme}>
  <BrowserRouter>
    <App />
  </BrowserRouter>
  </ChakraProvider>
);

export default theme;