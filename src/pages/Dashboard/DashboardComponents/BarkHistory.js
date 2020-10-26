import React from 'react';
import {
  Col, Button, Container,
} from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { StyledBarkHistory, StyledAlertHistory } from '../../../styled/styledHisory';

export default ({ url, allBarks, bark }) => {
  
return (
  <StyledBarkHistory>
    <Col md={12}>
      <Container className="mt-5">
        <h5>Powiadomienia z dnia {bark}:</h5>
        {allBarks?.length < 1 ? <StyledAlertHistory variant="info">Brak szczeknięć!</StyledAlertHistory> : allBarks}
      </Container>
    </Col>
    <Col md={{ span: 0, offset: 10 }} className="mb-5">
      <Link to={`${url}/all-history`}>
        <Button variant="outline-secondary">
          cała historia
        </Button>
      </Link>
    </Col>
  </StyledBarkHistory>
);
};