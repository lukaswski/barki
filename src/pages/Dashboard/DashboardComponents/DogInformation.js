import React from 'react';
import { Col, Card, Button, Row } from 'react-bootstrap';
import { dotsIcon } from '../../../img/iconsSVG/iconsSvg';


export default ({ userDataValue }) => (

<Card border="light">
  <Card.Header>
    <Row>
      <Col md={{ span: 3, offset: 0 }} sm={{span: 2, offset: 0}} xs={{span: 5, offset: 0 }}>
        <h5>{userDataValue.dogName}</h5>
        {' '}
      </Col>
      <Col md={{ span: 2, offset: 7 }} sm={{span: 2, offset: 8 }} xs={{span: 1, offset: 4 }}>
        <Button variant="outline-secondary">{dotsIcon}</Button>
      </Col>
    </Row>
  </Card.Header>
  <Card.Body>
    <Card.Text>
      <div>
        wiek:
        {userDataValue.age}
      </div>
      <div>
        rasa:
        {userDataValue.race}
      </div>
      <hr />
      <div>numer seryjny obroży </div>
    </Card.Text>
  </Card.Body>
</Card>

);