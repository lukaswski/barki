import React from 'react';
import ReactDOM from 'react-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import { LoginProvider } from './contexts/LoginContext';
import Root from './Root';
import GlobalStyle from './styled/globalStyle';

ReactDOM.render(
  <LoginProvider>
    <GlobalStyle />
    <Root />
  </LoginProvider>,
  document.getElementById('root'),
);
