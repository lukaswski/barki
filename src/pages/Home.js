import React, { useState } from 'react';
import {
  Container, Col, OverlayTrigger, Tooltip, Fade,
} from 'react-bootstrap';
import { StyledHero, HeroSlogan, HeroButton } from '../styled/styledComponents';
import { HERO_CONTENT } from '../utilities/textContent';
import Footer from './Footer';

export default () => {
  const { title, subtitle, tooltip, button } = HERO_CONTENT;
  return (
    <Fade in appear>
      <div>
        <StyledHero>
          <Col md={{ span: 6, offset: 5 }}>
            <HeroSlogan>
              {title}
              <h5>{subtitle}</h5>
            </HeroSlogan>
          </Col>
          <Col md={{ span: 3, offset: 8 }}>
            <OverlayTrigger overlay={<Tooltip id="tooltip">{tooltip}</Tooltip>}>
              <HeroButton size="lg" variant="primary" onClick={() => alert('testujesz bez logowania')}>{button}</HeroButton>
            </OverlayTrigger>
          </Col>
        </StyledHero>
        <Container>Home</Container>
        <Footer />
      </div>
    </Fade>
  );
};
