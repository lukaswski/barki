import React from 'react';
import {
  Container, Fade, Row, Spinner,
} from 'react-bootstrap';
import CardSettingComponent from './CardSettingComponent';

export default ({ userDataValue, userDataValue: { userName } }) => {
  const userValues = Object.keys(userDataValue)
    .filter((value) => !value.includes('dog') && !value.includes('uid') && !value.includes('name') && !value.includes('barking') && !value.includes('firstLogin'))
    .map((value) => ({ name: value, title: `zmień ${value}` }))
    .reverse();

  return (
    <Fade in appear>
      <Container>
        <h2>
          Zmień informacje o
          {' '}
          {userName}
        </h2>
        {userName ? userValues.map(({ title, name }) => (
          <CardSettingComponent
            key={name}
            title={title}
            subtitle={name}
            dataValue={name}
            userDataValue={userDataValue}
          />
        ))
          : (
            <Container>
              <Row className="d-flex justify-content-center">
                <Spinner animation="border" variant="info" />
              </Row>
            </Container>
          )
          }
      </Container>
    </Fade>
  );
};
