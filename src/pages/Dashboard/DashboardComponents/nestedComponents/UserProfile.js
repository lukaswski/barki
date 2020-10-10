import React from 'react';
import {
  Container, Fade,
} from 'react-bootstrap';
import CardSettingComponent from './CardSettingComponent';

export default ({ userDataValue, userDataValue: { userName } }) => {
  const userValues = Object.keys(userDataValue)
    .filter((value) => !value.includes('dog') && !value.includes('uid') && !value.includes('name') && !value.includes('firstLogin'))
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
        {userValues.map(({ title, name }) => (
          <CardSettingComponent
            key={name}
            title={title}
            subtitle={name}
            dataValue={name}
            userDataValue={userDataValue}
          />
        ))}
      </Container>
    </Fade>
  );
};
