import React from 'react';
import {
  Col, Card, Button, Row, Spinner,
} from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { Styledtext } from '../../../styled/styledComponents';
import { dotsIcon } from '../../../img/iconsSVG/iconsSvg';

export default ({
  userDataValue: {
    dogName, dogAge, dogRace, serialNumber,
  }, url,
}) => (
  <Card border="light">
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
        {dogAge ? (
          <div>
            wiek:
            <Styledtext className="dogInformation" > {dogAge}</Styledtext> 
          </div>
        ) : <Spinner animation="border" size="sm" variant="info" />}
        <hr />
        {dogRace ? (
          <div>
            rasa:
           <Styledtext className="dogInformation" > {dogRace}</Styledtext> 
          </div>
        ) : <Spinner animation="border" size="sm" variant="info" />}
        <hr />
        {serialNumber ? (
          <div>
            numer seryjny obroży:
           <Styledtext className="dogInformation" > {serialNumber}</Styledtext> 
          </div>
        ) : <Spinner animation="border" size="sm" variant="info" />}
      </div>
    </Card.Body>
  </Card>
);
