import React, { createContext } from 'react';

export const LogInContext = createContext();

export const LogInProvider = (props) => (
  <LogInContext.Provider value="context działa">
    {props.children}
  </LogInContext.Provider>
);
