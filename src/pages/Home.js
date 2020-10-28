import React from 'react';
import {
  Col, OverlayTrigger, Tooltip, Fade, Row, Button, Container, Badge,
} from 'react-bootstrap';
import {
  StyledHero, HeroSlogan, StyledButton, StyledHomeContainer, NumberHolderColumn,
  StyledDogImage, StyledColumnText, StyledLink,
} from '../styled/styledComponents';
import { StyledImage } from '../styled/styledAbout';
import { HERO_CONTENT, DIFFERENCE_CONTENT } from '../utilities/textContent';
import TestItBarComponent from '../components/TestItBarComponent';
import Footer from '../components/Footer';
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
            <p>
              Pierwsza obroża, która łącząc się z domową siecią wi-fi
              przekazuje informacje o szczekniu.
              Sąsiedzi nie będą już więcej wrzucać Ci listów do skrzynki
              o uciszeniu szczeniaka bądź nadpobudliwego pupila
              a przy tym nie zrobi mu krzywdy bo działa tylko na zasadzie wibracji.
            </p>
          </Row>
        </StyledHomeContainer>

        <StyledHomeContainer fluid className="assets">
          <Row className="justify-content-center">
            <h2>Co odróżnia obroże Barki od innych?</h2>
          </Row>
          <Row className="mt-5">
            {DIFFERENCE_CONTENT.map(({ name, icon, paragraph }) => (
              <Col key={name} md>
                <Col className="mb-5">{icon}</Col>
                <div>
                  <h3>{title}</h3>
                  <p>
                    {paragraph}
                  </p>
                </div>
              </Col>
            ))}
          </Row>
        </StyledHomeContainer>
        <StyledHomeContainer fluid className="callToAction">
          <Row className="justify-content-center">
            <h2>Im wcześniej zaczniesz - tym szybsze będą efekty!</h2>
          </Row>
          <Row className="justify-content-center">
            <p>Obroża nie będzie musiała być codziennoscią gdy będę dorosły.</p>
          </Row>
          <Container className="mt-5">
            <StyledLink to="login">
              <Button block variant="success">
                Rejestracja konta
              </Button>
            </StyledLink>
          </Container>
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
                Obroża jest już aktywna i działą w trybie czuwania,
                wystarczy ją założyć swojemu pupilowi na szyję i to koniec,
                całą resztę możesz podglądać w aplikacji
              </p>
            </StyledColumnText>
            <NumberHolderColumn md md={{ order: 'last' }}>
              <StyledDogImage className="num" src={num1} />
            </NumberHolderColumn>
          </Row>
          <Row md className="mt-5">
            <NumberHolderColumn md>
              <StyledDogImage className="numYelow" src={num2} />
            </NumberHolderColumn>
            <StyledColumnText className="yelowDog" md>
              <p>
                W momencie gdy mikrofon w obroży zarejestruje
                głośne szczekanie wówczas aktywuje wibracje rozpraszające ujadanie,
              </p>
            </StyledColumnText>
            <Col md xl={{ order: 'last' }} md={{ order: 'last' }} sm={{ order: 'first' }} xs={{ order: 'first' }}>
              <StyledDogImage src={yelowDog} />
            </Col>
          </Row>
          <Row className="mt-5">
            <Col md><StyledDogImage src={blueDog} /></Col>
            <StyledColumnText md sm={{ order: 'last' }} xs={{ order: 'last' }}>
              <p>
                Bez obaw, zabawy psa z piłką nie aktywują obroży,
                potrzebne naprawdę głośne szczekanie oraz ruch strun głosowych.
              </p>
            </StyledColumnText>
            <NumberHolderColumn md md={{ order: 'last' }}>
              <StyledDogImage className="num" src={num3} />
            </NumberHolderColumn>
          </Row>
        </StyledHomeContainer>

        <TestItBarComponent />
        <Footer />
      </div>
    </Fade>
  );
};
