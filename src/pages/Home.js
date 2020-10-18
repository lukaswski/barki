import React from 'react';
import {
  Col, OverlayTrigger, Tooltip, Fade, Row, Button, Container,
} from 'react-bootstrap';
import {
  wifiIcon, wibrationIcon, houseIcon, calendarIcon,
} from '../img/iconsSVG/iconsSvg';
import {
  StyledHero, HeroSlogan, StyledButton, StyledHomeContainer, NumberHolderColumn, 
  StyledDogImage, StyledColumnText,
} from '../styled/styledComponents';
import { StyledImage } from '../styled/StyledAbout';
import { HERO_CONTENT } from '../utilities/textContent';
import Footer from './Footer';
import barkFrontFlat from '../img/barkiFrontFlat.png';
import yelowDog from '../img/yelowDog.jpg';
import blueDog from '../img/blueDog.jpg';
import redDog from '../img/redDog.jpg';
import num1 from '../img/num1.jpg';
import num2 from '../img/num2.jpg';
import num3 from '../img/num3.jpg';

export default () => {
  const {
    title, tooltip, button,
  } = HERO_CONTENT;
  return (
    <Fade in appear>
      <div>
        <StyledHero>
          <Container fluid>
            <Row className="justify-content-center">
              <Col md={{ span: 7 }}>
                <HeroSlogan>{title}</HeroSlogan>
              </Col>
            </Row>
            <Row className="text-align-center">
              <OverlayTrigger overlay={<Tooltip id="tooltip">{tooltip}</Tooltip>}>
                <StyledButton className="hero" variant="warning" onClick={() => alert('testujesz bez logowania')}>{button}</StyledButton>
              </OverlayTrigger>
            </Row>
          </Container>
        </StyledHero>

        <StyledHomeContainer fluid className="about">
          <Row className="justify-content-center">
            <h2>O obroży Barki:</h2>
          </Row>
          <StyledImage className="barkFrontFlat" src={barkFrontFlat} rounded />
          <Row className="text-align-center">
            <article>
              Pierwsza obroża, która łącząc się z domową siecią wi-fi
              przekazuje informacje o szczekniu.
              Sąsiedzi nie będą już więcej wrzucać Ci listów do skrzynki
              o uciszeniu szczeniaka bądź nadpobudliwego pupila
              a przy tym nie zrobi mu krzywdy bo działa tylko na zasadzie wibracji.
            </article>
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
                <p>
                  Gdy pies zaczyna szczekać lub wyć, jego zachowanie korygują
                  <b>silne wibracje,</b>
                  {' '}
                  które są w 100% bezpieczne
                </p>
              </div>
            </Col>
            <Col md>
              <Col className="mb-5">{houseIcon}</Col>
              <p>
                <h3>Spokój sąsiadów </h3>
                <p>
                  Otrzymywanie listów do skrzynki,
                  <b>skarżenie się</b>
                  {' '}
                  na Twojego psa we wspólnocie/spółdzielni to już przeszłość
                </p>
              </p>
            </Col>
            <Col md>
              <Col className="mb-5">{calendarIcon}</Col>
              <div>
                <h3>Kalendarz zdarzeń</h3>
                <p>
                  Pełna historia zdarzeń w kalendarzu, nic Ci nie umknie - wiesz
                  <b>ile razy i o której godzinie</b>
                  {' '}
                  nastąpiło uspokajanie psa
                </p>
              </div>
            </Col>
            <Col md>
              <Col className="mb-5">{wifiIcon}</Col>
              <div>
                <h3>Jesteś online</h3>
                <p>
                  Jedyna obroża, łącząca się z domową
                  <b>siecią Wi-fi</b>
                  {' '}
                  do przekazywania tobie informacji na żywo o zachowaniu psa
                </p>
              </div>
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
          <StyledButton variant="success" lg block className="CtaButton">Rejestracja nowego konta</StyledButton>
        </StyledHomeContainer>
        <StyledHomeContainer fluid className="howItWorks">
          <Row className="justify-content-center mb-5">
            <h2>Jak działa obroża?</h2>
          </Row>
          <hr />

          <Row className="mt-5">
            <Col md><StyledDogImage src={redDog} /></Col>
            <StyledColumnText md sm={{ order: 'last' }} xs={{ order: 'last' }}>
              <p>
                Obroża jest już aktywna i działą w trybie czuwania, wystarczy ją założyć swojemu pupilowi na szyję i to koniec, całą resztę możesz podglądać w aplikacji
              </p>
            </StyledColumnText>
            <NumberHolderColumn md md={{ order: 'last' }}><StyledDogImage className="num" src={num1} /></NumberHolderColumn>
          </Row>
          <Row md className="mt-5">
            <NumberHolderColumn md><StyledDogImage className="numYelow" src={num2} /></NumberHolderColumn>
            <StyledColumnText className="yelowDog" md>
              <p>
                W momencie gdy mikrofon w obroży zarejestruje głośne szczekanie wówczas aktywuje wibracje rozpraszające ujadanie,
              </p>
            </StyledColumnText>
            <Col md xl={{ order: 'last' }} md={{ order: 'last' }} sm={{ order: 'first' }} xs={{ order: 'first' }}><StyledDogImage src={yelowDog} /></Col>
          </Row>
          <Row className="mt-5">
            <Col md><StyledDogImage src={blueDog} /></Col>
            <StyledColumnText md sm={{ order: 'last' }} xs={{ order: 'last' }}>
              <p>
                Bez obaw, zabawy psa z piłką nie aktywują obroży, potrzebne naprawdę głośne szczekanie oraz ruch strun głosowych.
              </p>
            </StyledColumnText>
            <NumberHolderColumn md md={{ order: 'last' }}><StyledDogImage className="num" src={num3} /></NumberHolderColumn>
          </Row>
        </StyledHomeContainer>

        <StyledHomeContainer fluid className="lastCallToAction">
          <Row className="justify-content-center">
            <h2>Przetestuj na koncie demo</h2>
          </Row>
          <Row className="text-align-center">
            <article>
              Nie musisz się rejestrować ani zamawiać obroży, sprawdź
              jak działa aplikacja na koncie demo, które dla Ciebie przygotowaliśmy
              i przekonaj się, że obroża Barki spełni Twoje oczekiwania
            </article>
            <Button variant="outline-primary" className="mt-5" block onClick={() => alert('testujesz bez logowania')}>testuj bez logowania</Button>
            <Col className="m-1">lub:</Col>
            <Button variant="outline-success" block>załóż swoje konto</Button>
          </Row>
        </StyledHomeContainer>
        <Footer />
      </div>
    </Fade>
  );
};
