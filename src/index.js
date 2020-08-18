import React from 'react';
import ReactDOM from 'react-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import { LogInProvider } from './LogInContext';
import Root from './Root';

ReactDOM.render(
  <React.StrictMode>
    <LogInProvider>
      <Root />
    </LogInProvider>
  </React.StrictMode>,
  document.getElementById('root'),
);
