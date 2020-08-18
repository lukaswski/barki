import React from 'react';
import GlobalStyle from './styled/GlobalStyle,';
import { Button } from 'react-bootstrap';

const loggedIn = true;

function Root() {
  return (
    <>
      <GlobalStyle />
      <h1>Barki</h1>
      <h4>Jedyna skuteczna obroża oduczająca wycia, Twojego psiaka</h4>
      {loggedIn === true
        ? <p>Witaj użytkowniku Łukasz</p>
        : <p>Witaj, nie jesteś zalogowany </p>}
        <Button></Button>
    </>
  );
}

export default Root;
