import React from 'react';
import {
  Container, Fade, Col, Spinner, Row,
} from 'react-bootstrap';
import CardSettingComponent from './CardSettingComponent';

export default ({ userDataValue, userDataValue: { dogName } }) => {
  const dogValues = Object.keys(userDataValue)
    .filter((value) => value.includes('dog'))
    .map((value) => ({ name: value, title: `zmień ${value}` }));

  return (
    <Fade in appear>
      <Container>
        <h2>
          Zmień informacje o
          {' '}
          {dogName}
        </h2>
        <Col>
          {dogName ? dogValues.map(({ title, name }) => (
            <CardSettingComponent
              key={name}
              title={title}
              subtitle={name}
              dataValue={name}
              userDataValue={userDataValue}
            />
          )) : (
            <Container>
              <Row className="d-flex justify-content-center">
                <Spinner animation="border" variant="info" />
              </Row>
            </Container>
          )}
        </Col>
      </Container>
    </Fade>
  );
};
