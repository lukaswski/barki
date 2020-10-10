import React, { useEffect, useState } from 'react';
import {
  Fade, Spinner, Row, Button, Container,
} from 'react-bootstrap';
import { NotLoggedBackground, NotLoggedText, StyledLink } from '../styled/styledComponents';

export default ({ setRegisterButton }) => {
  const [spinner, setSpinner] = useState(
    <Container>
      <Row className="d-flex justify-content-center">
        <Spinner animation="border" variant="info" />
      </Row>
    </Container>,
  );

  useEffect(() => {
    setTimeout(() => setSpinner(
      <NotLoggedBackground>
        <NotLoggedText>
          <NotLoggedText className="notLoggedTitle">
            Psia kość!
            Nie jesteś zalogowany...
          </NotLoggedText>
          <StyledLink to="login" className="notLoggedLink">
            <Button block variant="info" onClick={() => setRegisterButton(true)}>
              Zaloguj się
            </Button>
          </StyledLink>
          <NotLoggedText className="subtitle">
            lub jeśli nie masz konta:
          </NotLoggedText>
          <StyledLink to="login" className="notLoggedLink">
            <Button block variant="success" onClick={() => setRegisterButton(false)}>
              Zarejestruj się
            </Button>
          </StyledLink>
        </NotLoggedText>
      </NotLoggedBackground>,
    ), 2000);
    return (clearTimeout());
  }, []);
  return (

    <Fade in appear>
      {spinner}
    </Fade>
  );
};
