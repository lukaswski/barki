import React from 'react';
import { Row, Col, Button } from 'react-bootstrap';
import { useHistory } from 'react-router-dom';
import { authByPassword } from '../firebase/firebaseConfig';
import { StyledHomeContainer, StyledLink } from '../styled/styledComponents';

const CallToAction = () => {
  const history = useHistory();
  return (
    <StyledHomeContainer fluid className="lastCallToAction">
      <Row className="justify-content-center">
        <h2>Przetestuj na koncie demo</h2>
      </Row>
      <Row className="text-align-center">
        <article>
          Nie musisz się rejestrować ani zamawiać obroży, sprawdź
          jak działa aplikacja na
          {' '}
          <b>koncie demo</b>
          , które dla Ciebie przygotowaliśmy
          i przekonaj się, że obroża Barki spełni Twoje oczekiwania
        </article>
      </Row>
      <Button variant="outline-primary" className="mt-5" block onClick={() => authByPassword('nb.no@op.pl', 'barkicollar').then(() => history.push('/dashboard'))}>testuj bez logowania</Button>
      <Col className="m-1">lub:</Col>
      <StyledLink to="login" className="notLoggedLink">
        <Button block variant="success">
          zaloguj się
        </Button>
      </StyledLink>
    </StyledHomeContainer>
  );
};

export default React.memo(CallToAction);
