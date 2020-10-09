import React from 'react';
import {
  Col, Button, Container, Badge, Alert
} from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { StyledTable } from '../../../styled/styledDashboard';

export default ( { url }) => (
  <>
    <Col md={12}>
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
    </Col>
    <Col md={{ span: 0, offset: 10 }}><Link to={`${url}/all-history`}><Button variant="outline-secondary">cała historia</Button></Link></Col>
  </>
);
