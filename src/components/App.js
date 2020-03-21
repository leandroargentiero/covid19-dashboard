import React from 'react';
import { ThemeProvider } from 'styled-components';
import { theme, darkTheme, GlobalStyles } from '../themes';

import '../fonts/index.css';
import Hero from './Hero';
import FloatingContainer from './FloatingContainer';
import Stats from './Stats';
import CountrySelector from './CountrySelector';
import Chart from './Chart';

const API_ENDPOINT = process.env.REACT_APP_API_KEY;

const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <main>
        <Hero />
        <div className='container'>
          <FloatingContainer>
            <Stats title='Global status' url={API_ENDPOINT} />
            <Chart url={API_ENDPOINT} />
            <CountrySelector url={API_ENDPOINT} />
          </FloatingContainer>
        </div>
      </main>
    </ThemeProvider>
  );
};

export default App;
