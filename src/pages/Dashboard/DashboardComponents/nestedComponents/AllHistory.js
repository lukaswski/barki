import React from 'react';
import {
  Container, Fade, Badge,
} from 'react-bootstrap';
import { StyledAlertHistory } from '../../../../styled/styledHisory';

export default ({ barking }) => (
  <Fade in appear>
    <Container>
      <h2>Cała dostępna historia:</h2>
      {barking && Object.values(barking)
        .map((singleBark) => new Date(singleBark).toJSON())
        .sort()
        .reverse()
        .map((barkTime) => (
          <StyledAlertHistory key={barkTime} variant="warning">
            Dnia
            {' '}
            <Badge variant="info">{new Date(barkTime).toJSON().slice(0, 10)}</Badge>
            {' '}
            wykryto szczekanie o godzinie:
            {' '}
            <Badge variant="warning">{new Date(barkTime).toJSON().slice(11, 16)}</Badge>
          </StyledAlertHistory>
        ))}
    </Container>
  </Fade>
);
