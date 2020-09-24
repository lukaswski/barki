import React from 'react';
import { Container, Fade } from 'react-bootstrap';
import Footer from './Footer';

export default () => (
  <Fade in appear>
    <div>
    <Container>
      <h2>Kontakt do mnie!</h2>
    </Container>
    <Footer />
    </div>
  </Fade>
);
