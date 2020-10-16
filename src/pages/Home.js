import React from 'react';
import {
  Col, OverlayTrigger, Tooltip, Fade, Row,
} from 'react-bootstrap';
import {
  wifiIcon, wibrationIcon, houseIcon, calendarIcon,
} from '../img/iconsSVG/iconsSvg';
import {
  StyledHero, HeroSlogan, HeroButton, StyledHomeContainer,
} from '../styled/styledComponents';
import { HERO_CONTENT } from '../utilities/textContent';
import Footer from './Footer';

export default () => {
  const {
    title, subtitle, tooltip, button,
  } = HERO_CONTENT;
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

        <StyledHomeContainer fluid className="about">
          <Row className="justify-content-center">
            <h2>O obroży Barki</h2>
          </Row>
          <Row className="text-align-center">
            <article>Pierwsza obroża, która łącząc się z domową siecią wi-fi przekazuje informacje o szczekniu. Sąsiedzi nie będą już więcej wrzucać Ci listów do skrzynki o uciszeniu szczeniaka bądź nadpobudliwego pupila a przy tym nie zrobi mu krzywdy bo działa tylko na zasadzie wibracji.</article>
          </Row>
        </StyledHomeContainer>

        <StyledHomeContainer fluid className="assets">
          <Row className="justify-content-center">
            <h2>Co odróżnia obroże Barki od innych?</h2>
          </Row>
          <Row className="mt-5">
            <Col md>
              <Col className="mb-5">{wibrationIcon}</Col>
              <div>
                <h3>Tylko wibracje</h3>
               <p>Gdy pies zaczyna szczekać lub wyć, jego zachowanie korygują <b>silne wibracje,</b> które są w 100% bezpieczne</p>
              </div>
            </Col>
            <Col  md>
              <Col className="mb-5">{houseIcon}</Col>
              <p>
                <h3>Spokój sąsiadów </h3>
                <p>Otrzymywanie listów do skrzynki, <b>skarżenie się</b> na Twojego psa we wspólnocie/spółdzielni to już przeszłość</p>
              </p>
            </Col>
            <Col  md>
              <Col className="mb-5">{calendarIcon}</Col>
              <div>
                <h3>Kalendarz zdarzeń</h3>
                <p>Pełna historia zdarzeń w kalendarzu, nic Ci nie umknie - wiesz <b>ile razy i o której godzinie</b> nastąpiło uspokajanie psa</p>              </div>
            </Col>
            <Col md>
              <Col className="mb-5">{wifiIcon}</Col>
              <div>
                <h3>Jesteś online</h3>
                <p>Jedyna obroża, łącząca się z domową <b>siecią Wi-fi</b> do przekazywania tobie informacji na żywo o zachowaniu psa</p>              </div>
            </Col>
          </Row>
        </StyledHomeContainer>
        <StyledHomeContainer fluid className="callToAction">
          <Row className="justify-content-center">
            <h2>Im wcześniej zaczniesz - tym szybsze będą efekty!</h2>
          </Row>
          <Row className="justify-content-center">
            <p>Obroża nie będzie musiała być codziennoscią gdy będę dorosły.</p>

          </Row>
        </StyledHomeContainer>

        <StyledHomeContainer fluid className="howItWorks">
          <Row className="justify-content-center">
            <h2>Jak to działa?</h2>
            
          </Row>
          <hr />
        </StyledHomeContainer>
        <Footer />
      </div>
    </Fade>
  );
};
