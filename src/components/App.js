import React from 'react';
import { ThemeProvider } from 'styled-components';
import { theme, GlobalStyles } from '../themes';

import '../fonts/index.css';
import Hero from './Hero';

const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <Hero />
      <p>Hello World!</p>
    </ThemeProvider>
  );
};

export default App;
