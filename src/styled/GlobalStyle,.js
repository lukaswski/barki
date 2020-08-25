import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  html{
    box-sizing: border-box;
  }

  *::before,
  *::after {
    box-sizing: inherit;
  }

  body {
   margin: 0;
   font-family: Arial, Helvetica, sans-serif
  }

  h1{
    font-size: 4rem;
  }
  h4 {
    font-size: 1.2rem;
  }

  ul {
    color: black;
    text-decoration: none;
  }
`;

export default GlobalStyle;