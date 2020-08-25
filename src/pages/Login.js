import React from 'react';
import { Button } from 'react-bootstrap';
import { authByProvider, FacebookProvider, GoogleProvider } from '../firebase/firebaseConfig';

export default () => (
  <>
    <Button onClick={() => authByProvider(FacebookProvider)}>Facebook</Button>
    <Button onClick={() => authByProvider(GoogleProvider)} variant="danger">Google</Button>
  </>
);
