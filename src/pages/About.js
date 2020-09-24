import React from 'react';
import { Container, Fade } from 'react-bootstrap';
import Footer from './Footer';

export default () => (
  <Fade in appear>
    <div>
      <Container>
        About
      </Container>
      <Footer />
    </div>
  </Fade>
);
