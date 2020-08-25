import React, { useContext } from 'react';
import { Container } from 'react-bootstrap';
import { LoginContext } from '../contexts/LoginContext';

export default () => {
  const value = useContext(LoginContext);
  return (
    <Container>
      <h2>
        Witaj
      </h2>
      <h3>{value.name}</h3>
      <p>to twój interface obroży</p>
    </Container>
  );
};
