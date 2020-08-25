import React from 'react';
import { Button, Container } from 'react-bootstrap';
import {
  authByProvider, facebookProvider, googleProvider, logout,
} from '../firebase/firebaseConfig';

export default () => (
  <Container>
    <Button onClick={() => authByProvider(facebookProvider)}>Facebook</Button>
    <Button onClick={() => authByProvider(googleProvider)} variant="danger">Google</Button>
    <Button onClick={() => authByProvider(logout)} variant="dark">wyloguj sie</Button>
  </Container>
);
