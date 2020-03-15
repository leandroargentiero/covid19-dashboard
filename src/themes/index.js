import { createGlobalStyle } from 'styled-components';

const statusColors = {
  success: 'green',
  warning: 'orange',
  danger: 'red',
};

export const theme = {
  colors: {
    primary: '#4caf50',
    background: '#f4f4f4',
    text: '#333',
    ...statusColors,
  },
};

const customMediaQuery = maxWidth => `@media (max-width: ${maxWidth}px)`;

export const mediaQuery = {
  custom: customMediaQuery,
  dekstop: customMediaQuery(922),
  tablet: customMediaQuery(768),
  phone: customMediaQuery(576),
};

export const GlobalStyles = createGlobalStyle`
  *,
  *::after,
  *::before {
    box-sizing: border-box;
  }
  body {
    background: ${props => props.theme.colors.background};
    color:  ${props => props.theme.colors.text};
    margin: 0;
    padding: 0;
    font-family: 'Montserrat', sans-serif;
    transition: all 0.25s linear;
  }
  a {
    text-decoration: none;
    color: grey;
  }
  /* .container {
    max-width: 800px;
    margin: 0px auto 8rem auto;
    min-height: 100vh;
  } */
`;
