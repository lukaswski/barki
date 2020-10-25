import React from 'react';
import {
  Col, Button, Container, Spinner,
} from 'react-bootstrap';
import { Link } from 'react-router-dom';

export default ({ url, allBarks }) => (
  <>
    <Col md={12}>
      <Container className="mt-5">
        <h5>Powiadomienia:</h5>
        {allBarks || <Spinner animation="border" variant="info" />}
      </Container>
    </Col>
    <Col md={{ span: 0, offset: 10 }} className="mb-5">
      <Link to={`${url}/all-history`}>
        <Button variant="outline-secondary">
          cała historia
        </Button>
      </Link>
    </Col>
  </>
);
