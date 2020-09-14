import React from 'react';
import { Container, Alert } from 'react-bootstrap';

export default () => (
  <Container>
    <h5>Powiadomienia:</h5>
    <Alert variant="danger">
      Sprawdź czy obroża jest poprawnie założona
    </Alert>
    <Alert variant="warning">
      Wykryto szczekanie o godzinie 13.32
    </Alert>
    <Alert variant="warning">
      Wykryto szczekanie o godzinie 13.12
    </Alert>
    <Alert variant="warning">
      Wykryto szczekanie o godzinie 13.00
    </Alert>
  </Container>
);
