import React from 'react';
import { Container, Col } from 'react-bootstrap';
import { StyledHero, HeroSlogan, HeroButton } from '../styled/styledComponents';

export default () => (
  <>
    <StyledHero>
      <Col md={{ span: 6, offset: 5 }} t="4">
        <HeroSlogan>
          Wibracyjna obroża antyszczekowa dla psów.
        </HeroSlogan>
        <h5>Skutecznie oduczy szczekania oraz wycia podczas Twojej nieobecności w mieszkaniu.</h5>
      </Col>
      <Col md={{ span: 4, offset: 8 }} t="4">
        <HeroButton size="lg" variant="primary">Przetestuj bez logowania</HeroButton>
      </Col>
    </StyledHero>
    <Container>Home</Container>
  </>
);
