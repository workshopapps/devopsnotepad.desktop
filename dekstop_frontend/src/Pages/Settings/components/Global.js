import { createGlobalStyle } from 'styled-components';
import '../MainSettings.module.css';

// eslint-disable-next-line import/prefer-default-export
export const GlobalStyles = createGlobalStyle`
  body {
    height: 100vh;
    background: ${({ theme }) => theme.body};
    color: ${({ theme }) => theme.text};
    padding: 0;
    margin: 0;
    border-color: ${({ theme }) => theme.border};
    
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
  button a {
    display: block;
    color: ${({ theme }) => theme.button} !important;
    ${'' /* background: ${({ theme }) => theme.button_bg} !important; */}
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

  tr {
  color: ${({ theme }) => theme.text} !important;
  }
  th {
  color: ${({ theme }) => theme.text} !important;
  }
  td {
  color: ${({ theme }) => theme.text} !important;
  }



  p {
    color: ${({ theme }) => theme.text} !important;
  }
  h1 {
    color: ${({ theme }) => theme.text} !important;
  }
  h2 {
    color: ${({ theme }) => theme.text} !important;
  }
  h3 {
    color: ${({ theme }) => theme.text} !important;
  }

  .border_top {
    display: ${'none'} !important;
    border-top: 1px solid #efeef0;
  }

`;
