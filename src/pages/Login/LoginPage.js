import React from 'react';
import { Row, Col } from 'react-bootstrap';
import {
  StyledContainer, StyledLabel, StyledButton,
} from '../../styled/styledForm';
import {
  authByProvider, facebookProvider, googleProvider, logout
} from '../../firebase/firebaseConfig';
import LoginComponent from './LoginComponent';

export default () => (
  <StyledContainer>
    <LoginComponent />
    <hr />
    <StyledLabel>lub poprzez:</StyledLabel>
    <Row xs={1} md={1} className="justify-content-md-center">
      <Col>
        <StyledButton onClick={() => authByProvider(facebookProvider)}>Facebook</StyledButton>
      </Col>
      <Col>
        <StyledButton onClick={() => authByProvider(googleProvider)} variant="danger">Google</StyledButton>
      </Col>
      <Col>
        <StyledButton onClick={() => authByProvider(logout)} variant="dark">Wyloguj sie</StyledButton>
      </Col>
    </Row>
  </StyledContainer>
);
