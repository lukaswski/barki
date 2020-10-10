import React from 'react';
import {
  Col, Card, Button, Row,
} from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { dotsIcon } from '../../../img/iconsSVG/iconsSvg';

export default ({ userDataValue: { dogName, dogAge, dogRace, serialNumber }, url }) => (
  <Card border="light">
    <Card.Header>
      <Row>
        <Col md={{ span: 7, offset: 0 }} sm={{ span: 7, offset: 0 }} xs={{ span: 7, offset: 0 }}>
          <h5>{dogName}</h5>
          {' '}
        </Col>
        <Col md={{ span: 1, offset: 3 }} sm={{ span: 1, offset: 3 }} xs={{ span: 1, offset: 3 }}>
          <Link to={`${url}/dog-profile`}><Button variant="outline-secondary">{dotsIcon}</Button></Link>
        </Col>
      </Row>
    </Card.Header>
    <Card.Body>
      <div>
        <div>
          wiek:
          {dogAge}
        </div>
        <hr />
        <div>
          rasa:
          {dogRace}
        </div>
        <hr />
        <div>
          numer seryjny obroży:
          {serialNumber}
        </div>
      </div>
    </Card.Body>
  </Card>
);
