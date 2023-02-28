import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { BrowserRouter } from "react-router-dom";
import App from './components/App';
import { extendTheme, ChakraProvider } from '@chakra-ui/react'
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";

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


const firebaseConfig = {
  apiKey: "AIzaSyB9MQJWk-Q0ljwltdvtCmZMNtxmDtS4PV8",
  authDomain: "starr-jackson.firebaseapp.com",
  projectId: "starr-jackson",
  storageBucket: "starr-jackson.appspot.com",
  messagingSenderId: "1005724914837",
  appId: "1:1005724914837:web:21f2109f8ed7da4885779c",
  measurementId: "G-4Z26R6TBCN"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <ChakraProvider theme={theme}>
  <BrowserRouter>
    <App />
  </BrowserRouter>
  </ChakraProvider>
);

export default theme;