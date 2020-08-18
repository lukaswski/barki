import React, { useContext } from 'react';
import GlobalStyle from './styled/GlobalStyle,';
import { LogInContext } from './LogInContext';

const loggedIn = true;

function Root() {
  const value = useContext(LogInContext);
  return (
    <>
      <GlobalStyle />
      {value}
      <h1>Barki</h1>
      <h4>Jedyna skuteczna obroża oduczająca wycia, Twojego psiaka</h4>
      {loggedIn === true
        ? <p>Witaj użytkowniku Łukasz </p>
        : <p>Witaj, nie jesteś  </p>}
    </>
  );
}

export default Root;
