import React from 'react';
import {
  Container, Fade, Col,
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
          {dogValues.map(({ title, name }) => (
            <CardSettingComponent
              key={name}
              title={title}
              subtitle={name}
              dataValue={name}
              userDataValue={userDataValue}
            />
          ))}
        </Col>
      </Container>
    </Fade>
  );
};
