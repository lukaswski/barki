import React, { useContext } from 'react';
import { Container } from 'react-bootstrap';
import { LoginContext } from '../contexts/LoginContext';

export default () => {
 const {userData} = useContext(LoginContext);
 const [userDataValue] = userData;
  return (
    <Container>
      <h2>
        Witaj
      </h2>
  <h3>{userDataValue.name}</h3>
  <p>To twój id to:{userDataValue.uid}</p>
    </Container>
  );
};
