import React from 'react';
import {
  Col, Card, Button, Row, Spinner,
} from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { Styledtext } from '../../../styled/styledComponents';
import { dotsIcon } from '../../../img/iconsSVG/iconsSvg';

const spinnerOnWait = (value, txt) => (value ? (
  <div>
    {txt}
    <Styledtext className="dogInformation">
      {' '}
      {value}
    </Styledtext>
  </div>
) : <Spinner animation="border" size="sm" variant="info" />);

export default ({
  userDataValue: {
    dogName, dogAge, dogRace, serialNumber,
  }, url,
}) => (
  <Card border="light" className="mt-5">
    <Card.Header>
      <Row>
        <Col md={{ span: 7, offset: 0 }} sm={{ span: 7, offset: 0 }} xs={{ span: 7, offset: 0 }}>
          {dogName ? <h5>{dogName}</h5> : <Spinner animation="border" size="sm" variant="info" />}
          {' '}
        </Col>
        <Col md={{ span: 1, offset: 3 }} sm={{ span: 1, offset: 3 }} xs={{ span: 1, offset: 3 }}>
          <Link to={`${url}/dog-profile`}><Button variant="outline-secondary">{dotsIcon}</Button></Link>
        </Col>
      </Row>
    </Card.Header>
    <Card.Body>
      <div>
        {spinnerOnWait(dogAge, 'wiek:')}
        <hr />
        {spinnerOnWait(dogRace, 'rasa:')}
        <hr />
        {spinnerOnWait(serialNumber, 'numer seryjny:')}
      </div>
    </Card.Body>
  </Card>
);
