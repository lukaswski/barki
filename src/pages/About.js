import React, { useMemo } from 'react';
import {
  Container, Fade, Row, Col, Button,
} from 'react-bootstrap';
import Footer from './Footer';
import { StyledImage, StyledTextCol } from '../styled/StyledAbout';
import { StyledHomeContainer } from '../styled/styledComponents';
import barkiLeft from '../img/barkiLeft.png';
import barkFrontFlat from '../img/barkiFrontFlat.png';
import barkSet from '../img/barkiSet.png';
import barkiSetup from '../img/barkiSetup.jpg';
import barkiCardboard from '../img/barkiCardboard.png';

export default () => {
  const memoizedFooter = useMemo(() => <Footer />);
  return (
    <Fade in appear>
      <div>
        <Container>
          <StyledHomeContainer fluid className="ownConstruction">
            <Row className="justify-content-center">
              <h3>Rozwiązanie, którego szukałeś</h3>
            </Row>
            <hr />
            <StyledImage className="barkFrontFlat" src={barkFrontFlat} rounded />
            <Row className="text-align-center">
              <article>Pierwsza obroża, która łącząc się z domową siecią wi-fi przekazuje informacje o szczekniu. Sąsiedzi nie będą już więcej wrzucać Ci listów do skrzynki o uciszeniu szczeniaka bądź nadpobudliwego pupila a przy tym nie zrobi mu krzywdy bo działa tylko na zasadzie wibracji.</article>
            </Row>
          </StyledHomeContainer>
          <Row className="mb-5 mt-5">
            <StyledTextCol md>
              <h3>Idea stojąca za obrożą</h3>
              <hr />
              <article>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</article>
            </StyledTextCol>
            <Col md>
              <StyledImage className="barkiIdea" src={barkiLeft} rounded />
            </Col>
          </Row>
        </Container>
        <StyledHomeContainer fluid className="lastCallToAction">
          <Row className="justify-content-center">
            <h2>Przetestuj aplikację na koncie demo</h2>
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
        <Container>
          <Row className="mb-5">
            <Col>
              <Container>
                <StyledImage className="barkiLeft" src={barkiSetup} rounded />
              </Container>
            </Col>
            <StyledTextCol md>
              <h3>Jak to się zaczęło</h3>
              <hr />
              <article>Ut at fermentum nisi. Quisque posuere mattis gravida. Integer interdum et mauris vitae lacinia. Nam ac fringilla ipsum. Sed semper nulla odio, sed tempus erat elementum at. Proin neque dui, pharetra et augue ac, consectetur tristique eros. Etiam eget justo non nisl pretium aliquet. Vestibulum laoreet cursus eros, non tempor ex sagittis vitae.</article>
            </StyledTextCol>
          </Row>

          <Row xl className="mt-4">
            <StyledTextCol md>
              <h3>Zestaw na piątkę!</h3>
              <hr />
              <article>Ut at fermentum nisi. Quisque posuere mattis gravida. Integer interdum et mauris vitae lacinia. Nam ac fringilla ipsum. Sed semper nulla odio, sed tempus erat elementum at. Proin neque dui, pharetra et augue ac, consectetur tristique eros. Etiam eget justo non nisl pretium aliquet. Vestibulum laoreet cursus eros, non tempor ex sagittis vitae.</article>
            </StyledTextCol>
            <Col>
              <Container>
                <StyledImage className="barkiLeft" src={barkSet} rounded />
              </Container>
            </Col>
          </Row>
          <Row xl className="mt-4">
            <StyledTextCol md>
              <h3>Jedyne czego potrzebujesz: </h3>
              <hr />
              <article>Ut at fermentum nisi. Quisque posuere mattis gravida. Integer interdum et mauris vitae lacinia. Nam ac fringilla ipsum. Sed semper nulla odio, sed tempus erat elementum at. Proin neque dui, pharetra et augue ac, consectetur tristique eros. Etiam eget justo non nisl pretium aliquet. Vestibulum laoreet cursus eros, non tempor ex sagittis vitae.</article>
            </StyledTextCol>
            <Col>
              <Container>
                <StyledImage className="barkiLeft" src={barkiCardboard} rounded />
              </Container>
            </Col>
          </Row>
        </Container>
        {memoizedFooter}
      </div>
    </Fade>
  );
};
