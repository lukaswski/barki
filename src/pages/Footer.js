import React from 'react';
import { Link } from 'react-router-dom';
import {
  Container, Row, Col, Button,
} from 'react-bootstrap';
import { StyledFooter, StyledFooterRow } from '../styled/styledComponents';
import { facebookIcon, githubIcon, mailIcon } from '../img/iconsSVG/iconsSvg';

export default () => (
  <StyledFooter>
    <Container>
      <StyledFooterRow>
        <Col md={{ span: 5, offset: 6 }}>
          Obroża antyszczekowa Barki
        </Col>
      </StyledFooterRow>
      <StyledFooterRow>
        <Col md={{ span: 5, offset: 6 }}>
          <Link to="/faq">FAQ</Link>
          {' '}
          - najczęściej zadawane pytania
        </Col>
      </StyledFooterRow>
      <StyledFooterRow className="subtitle"><Col md={{ span: 4, offset: 6 }}>lub jeśli nie znajdziesz odpowiedzi</Col></StyledFooterRow>
      <StyledFooterRow><Col md={{ span: 5, offset: 6 }}>Kontakt do mnie!</Col></StyledFooterRow>
      <StyledFooterRow><Col md={{ span: 5, offset: 6 }}><input /></Col></StyledFooterRow>
      <StyledFooterRow><Col md={{ span: 5, offset: 6 }}><input /></Col></StyledFooterRow>
      <StyledFooterRow>
        <Col md={{ span: 5, offset: 6 }}>
          <Button>
            Wyślij
         </Button>
        </Col>
      </StyledFooterRow>
    </Container>
    <StyledFooterRow className="ownerInfo">
      Projekt strony oraz wykonanie:
      {' '}
      <br />
      {' '}
      Łukasz Wiśniewski
      <Row className="justify-content-md-center mt-4">
        <Col lg={{ span: 0.5, offest: 1 }}  xs>
          <a href="https://www.facebook.com/lukas.wski">{facebookIcon}</a>
          {' '}
        </Col>
        <Col lg={{ span: 0.5, offest: 2 }} xs>
          <a href="https://www.github.com/lukaswski">{githubIcon}</a>
          {' '}
        </Col>
        <Col lg={{ span: 0.5, offest: 3}} xs>
          <a href="mailto:wski.lukas@gmail.com/">{mailIcon}</a>
          {' '}
        </Col>
      </Row>
    </StyledFooterRow>
  </StyledFooter>
);
