import React from 'react';
import { ThemeProvider } from 'styled-components';
import { theme, GlobalStyles } from '../themes';

import '../fonts/index.css';
import Hero from './Hero';
import FloatingContainer from './FloatingContainer';
import Stats from './Stats';
import CountrySelector from './CountrySelector';
import Chart from './Chart';

import ReactGA from 'react-ga';

const API_ENDPOINT = process.env.REACT_APP_API_KEY;
ReactGA.initialize('UA-57911115-5');
ReactGA.pageview(window.location.pathname + window.location.search);

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
