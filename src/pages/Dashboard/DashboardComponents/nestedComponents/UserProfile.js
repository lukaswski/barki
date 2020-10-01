import React from 'react';
import {
  Container, Fade, Col,
} from 'react-bootstrap';
import CardSettingComponent from './CardSettingComponent';

export default ({ userDataValue }) => {
  const {
    userName, surname, dogRace, serialNumber,
  } = userDataValue;

  return (
    <Fade in appear>
      <Container>
        <h2>
          Zmień informacje o
          {' '}
          {userName}
        </h2>
        
       
      </Container>
    </Fade>
  );
};
