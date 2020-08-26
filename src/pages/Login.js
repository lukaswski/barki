import React from 'react';
import { Row, Col } from 'react-bootstrap';
import { useForm } from 'react-hook-form';
import {
  StyledContainer, StyledLabel, StyledButton, StyledSpan, StyledInput,
} from '../styled/styledForm';
import {
  authByProvider, facebookProvider, googleProvider, logout, authByPassword,
} from '../firebase/firebaseConfig';

export default () => {
  const {
    register, handleSubmit, watch, errors,
  } = useForm();
  const onSubmit = ({ email, password }) => authByPassword(email, password);

  return (
    <StyledContainer>
      <h2>Logowanie do konta</h2>
      <form onSubmit={handleSubmit(onSubmit)}>

        <StyledLabel>Adres email</StyledLabel>
        <StyledInput name="email" type="email" ref={register({ required: true })} />
        {errors.email && <StyledSpan>e-mail jest wymagany!</StyledSpan>}

        <StyledLabel>hasło</StyledLabel>
        <StyledInput name="password" type="password" ref={register({ required: true, minLength: 6 })} />
        {errors.password && <StyledSpan>hasło jest wymagane!</StyledSpan>}

        <StyledButton type="submit" variant="outline-success">Rejestracja</StyledButton>
      </form>
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
};
