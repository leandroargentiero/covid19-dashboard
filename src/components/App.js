import React from 'react';
import { ThemeProvider } from 'styled-components';
import { Helmet } from 'react-helmet';
import { theme, GlobalStyles } from '../themes';

import '../fonts/index.css';
import Hero from './Hero';
import FloatingContainer from './FloatingContainer';
import Stats from './Stats';
import CountrySelector from './CountrySelector';
import Chart from './Chart';

import ReactGA from 'react-ga';
import DailyCases from './DailyCases';

const API_ENDPOINT = process.env.REACT_APP_API_KEY;
ReactGA.initialize('UA-57911115-5');
ReactGA.pageview(window.location.pathname + window.location.search);

const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <Helmet>
        <meta charSet='utf-8' />
        <title>Covid-19 dashboard</title>
        <meta
          name='description'
          content='A dashboard that displays official Covid-19 data from the American Johns Hopkins University'
        />
        <link rel='canonical' href='https://covid19-dashboard.netlify.com/' />
      </Helmet>
      <main>
        <Hero />
        <div className='container'>
          <FloatingContainer>
            <Stats title='Global status' url={API_ENDPOINT} />
            <DailyCases url={API_ENDPOINT} />
            <CountrySelector url={API_ENDPOINT} />
          </FloatingContainer>
        </div>
      </main>
    </ThemeProvider>
  );
};

export default App;
