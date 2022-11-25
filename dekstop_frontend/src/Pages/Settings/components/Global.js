import { createGlobalStyle } from 'styled-components';

// eslint-disable-next-line import/prefer-default-export
export const GlobalStyles = createGlobalStyle`
  body {
    height: 100vh;
    background: ${({ theme }) => theme.body};
    color: ${({ theme }) => theme.text};
    padding: 0;
    margin: 0;
    font-family: BlinkMacSystemFont, -apple-system, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif;
    
  }
  footer {
    position: absolute;
    bottom: 5%;
    left: 50%;
    transform: translateX(-50%);
  }
  small {
    display: block;
  }
  button {
    display: block;
  }
  a {
    color: ${({ theme }) => theme.text} !important;
  }
  svg {
    color: ${({ theme }) => theme.text} !important;
  }
  small {
    color: ${({ theme }) => theme.small} !important;

  }
  h1 {
    color: ${({ theme }) => theme.text} !important;
  }
  h3 {
    color: ${({ theme }) => theme.text} !important;
  }

`;