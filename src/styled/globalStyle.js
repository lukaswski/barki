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
   box-shadow: ${(props) => (props.shadow ? '10 10 20 dimgrey' : null)};
   font-family: Georgia, 'Times New Roman', Times, serif, sans-serif;
  }

  h1{
    font-size: 3rem;
  }
  h4 {
    font-size: 1.2rem;
  }
  h5{
    color: black;
    }
  ul {
    color: black;
    text-decoration: none;
  }

`;

export default GlobalStyle;
