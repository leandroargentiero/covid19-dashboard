import { createGlobalStyle } from 'styled-components';

const statusColors = {
  success: '#03B65A',
  warning: 'orange',
  danger: '#F92427',
};

export const theme = {
  borderRadius: '12px',
  colors: {
    primary: '#4B12A5',
    textOnPrimary: '#fff',
    secondary: '#79FC4C',
    grey: '#E6E6F0',
    background: '#fbf8ff',
    text: '#444',
    ...statusColors,
  },
  boxShadow: `rgba(0, 0, 0, 0.05) 0px 1px 0px, rgba(0, 0, 0, 0.03) 0px 0px 8px,
  rgba(0, 0, 0, 0.1) 0px 20px 30px`,
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
    font-family: 'Inter', sans-serif;
    transition: all 0.25s linear;
  }
  a {
    text-decoration: none;
    color: ${props => props.theme.colors.primary};
  }

  .container {
    width: 100%;
    max-width: 850px;
    margin: 0 auto;
    padding: 0 16px 24px 16px;
  }
`;
