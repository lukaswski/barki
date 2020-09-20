import React from 'react';
import { Col, Card, Button, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { dotsIcon } from '../../../img/iconsSVG/iconsSvg';

export default ({ userDataValue, url }) => (
  <Card border="light">
    <Card.Header>
      <Row>
        <Col md={{ span: 3, offset: 0 }} sm={{span: 2, offset: 0}} xs={{span: 5, offset: 0 }}>
          <h5>{userDataValue.dogName}</h5>
          {' '}
        </Col>
        <Col md={{ span: 2, offset: 7 }} sm={{span: 2, offset: 8 }} xs={{span: 1, offset: 4 }}>
          <Link to={`${url}/dog-profile`}><Button variant="outline-secondary">{dotsIcon}</Button></Link>
        </Col>
      </Row>
    </Card.Header>
    <Card.Body>
      <div>
        <div>
          wiek:
          {userDataValue.age}
        </div>
        <hr />
        <div>
          rasa:
          {userDataValue.race}
        </div>
        <hr />
        <div>numer seryjny obroży </div>
      </div>
    </Card.Body>
  </Card>
);