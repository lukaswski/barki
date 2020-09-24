import React from 'react';
import { Link } from 'react-router-dom';
import {
  Container, Row, Col, Button,
} from 'react-bootstrap';
import { StyledFooter, StyledFooterRow } from '../styled/styledComponents';
import { facebookIcon, githubIcon, mailIcon } from '../img/iconsSVG/iconsSvg';
import FormTypes from '../utilities/FormTypes';

export default () => (
  <StyledFooter>
    <Container>
      <Col md={{ span: 9, offset: 2 }} lg={{ span: 6, offset: 6 }}>
        <StyledFooterRow>
          <Link to="/faq">FAQ</Link>
          {' '}
          - najczęściej zadawane pytania
        </StyledFooterRow>
        <StyledFooterRow className="subtitle">lub jeśli nie znajdziesz odpowiedzi</StyledFooterRow>
        <StyledFooterRow>Kontakt do mnie!</StyledFooterRow>
        <FormTypes />
      </Col>
    </Container>
    <StyledFooterRow className="ownerInfo">
      Projekt strony oraz wykonanie:
      {' '}
      <br />
      {' '}
      Łukasz Wiśniewski
      <Row className="justify-content-md-center mt-4">
        <Col lg={{ span: 0.5, offest: 1 }} xs>
          <a href="https://www.facebook.com/lukas.wski">{facebookIcon}</a>
          {' '}
        </Col>
        <Col lg={{ span: 0.5, offest: 2 }} xs>
          <a href="https://www.github.com/lukaswski">{githubIcon}</a>
          {' '}
        </Col>
        <Col lg={{ span: 0.5, offest: 3 }} xs>
          <a href="mailto:wski.lukas@gmail.com">{mailIcon}</a>
          {' '}
        </Col>
      </Row>
    </StyledFooterRow>
  </StyledFooter>
);
