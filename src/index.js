import React from 'react';
import ReactDOM from 'react-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import { LoginProvider } from './contexts/LoginContext';
import Root from './Root';
import GlobalStyle from './styled/GlobalStyle,';

ReactDOM.render(
  <React.StrictMode>
    <LoginProvider>
      <GlobalStyle />
      <Root />
    </LoginProvider>
  </React.StrictMode>,
  document.getElementById('root'),
);
