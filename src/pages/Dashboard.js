import React, { useContext } from 'react';
import { Container } from 'react-bootstrap';
import { LoginContext } from '../contexts/LoginContext';

export default () => {
  const [value, setValue] = useContext(LoginContext);
  return (
    <Container>
      <h2>
        Witaj
      </h2>
      <h3>{value.email}</h3>
      <p>To twój interface obroży</p>
    </Container>
  );
};
