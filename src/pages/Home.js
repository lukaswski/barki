import React from 'react';
import {
  Container, Col, OverlayTrigger, Tooltip,
} from 'react-bootstrap';
import { StyledHero, HeroSlogan, HeroButton } from '../styled/styledComponents';

export default () => (
  <>
    <StyledHero>
      <Col md={{ span: 6, offset: 5 }}>
        <HeroSlogan>
          Wibracyjna obroża antyszczekowa.
          <h5>Skutecznie oduczy szczekania oraz wycia podczas Twojej nieobecności w mieszkaniu.</h5>
        </HeroSlogan>
      </Col>
      <Col md={{ span: 3, offset: 8 }}>
        <OverlayTrigger overlay={<Tooltip id="tooltip">Testowy dostęp do aplikacji bez logowania!</Tooltip>}>
          <HeroButton size="lg" variant="primary" onClick={() => alert('testujesz bez logowania')}>Przetestuj</HeroButton>
        </OverlayTrigger>
      </Col>
    </StyledHero>
    <Container>Home</Container>
  </>
);
