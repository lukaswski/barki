import React from 'react';
import {Col, Card, Button, Row } from 'react-bootstrap';

export default ({ userDataValue }) => (

<Card border="light">
  <Card.Header>
    <Row>
      <Col>
        <h5>{userDataValue.dogName}</h5>
        {' '}
      </Col>
      <Col>
        <Button variant="dark">=</Button>
        <Button variant="outline-primary">+</Button>
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