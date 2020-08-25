import React, { createContext } from 'react';

export const LoginContext = createContext();

export const LoginProvider = (props) => (
  <LoginContext.Provider value="context działa">
    {props.children}
  </LoginContext.Provider>
);
