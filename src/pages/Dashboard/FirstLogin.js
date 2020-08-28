import React from 'react';
import { Container, Jumbotron, Row, Col, Button } from 'react-bootstrap';

export default () => (
  <Container>
  <h2>
    Witaj w Barki!
  </h2>
  <Row>
    <Col sm>
      <Jumbotron>
        <h3>Pierwsze logowanie</h3>
        <hr />
        <p>
          Wygląda na to, że jesteś tu po raz pierwszy!
          <p>Uzupełnij profil a w następnym kroku dodasz swoją obroże.</p>
        </p>
        <p>
          <Button block variant="outline-primary">Uzupełnij profil</Button>
        </p>
      </Jumbotron>
    </Col>
  </Row>
  <Row>
    <Col sm>
      <Jumbotron>
        <h3>
          Dodaj Psiaka
        </h3>
        <hr />
        <p>
          Wygląda na to, że jesteś tu po raz pierwszy!
          <p>Uzupełnij profil a w następnym kroku dodasz swoją obroże.</p>
        </p>
        <p>
          <Button block variant="outline-primary">Dodaj Psiaka</Button>
        </p>
      </Jumbotron>
    </Col>
    <Col sm>
      <Jumbotron>
        <h3>
          Dodaj Obrożę
        </h3>
        <hr />
        <p>
          Wygląda na to, że jesteś tu po raz pierwszy!
          <p>Uzupełnij profil a w następnym kroku dodasz swoją obroże.</p>
        </p>
        <p>
          <Button block variant="outline-primary">Dodaj Obrożę</Button>
        </p>
      </Jumbotron>
    </Col>
  </Row>

</Container>
);
