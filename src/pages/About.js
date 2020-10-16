import React, { useMemo } from 'react';
import {
  Container, Fade, Row, Col, Card,
} from 'react-bootstrap';
import Footer from './Footer';
import { StyledImage, StyledTextCol } from '../styled/StyledAbout';
import { StyledHomeContainer } from '../styled/styledComponents';
import hero from '../img/hero.jpg';

export default () => {
  const memoizedFooter = useMemo(() => <Footer />);
  return (
    <Fade in appear>
      <div>
        <Container>
          <h2>Poznaj historię obroży Barki</h2>
          <Row className="mt-4" >
            <StyledTextCol md>
              <h3>Idea stojąca za obrożą</h3>
              <article>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</article>
            </StyledTextCol>
            <Col md>
              <StyledImage src={hero} rounded />
            </Col>
          </Row>
          <Row className="mt-4">
            <Col>
              <StyledImage src={hero} rounded />
            </Col>
            <StyledTextCol md>
              <h3>Jak to się zaczęło</h3>
              <article>Ut at fermentum nisi. Quisque posuere mattis gravida. Integer interdum et mauris vitae lacinia. Nam ac fringilla ipsum. Sed semper nulla odio, sed tempus erat elementum at. Proin neque dui, pharetra et augue ac, consectetur tristique eros. Etiam eget justo non nisl pretium aliquet. Vestibulum laoreet cursus eros, non tempor ex sagittis vitae.</article>
            </StyledTextCol>
          </Row>
        </Container>
        <StyledHomeContainer fluid className="about">
          <Row className="justify-content-center">
            <h3>Decyzja o własnej konstrukcji</h3>
          </Row>
          <Row className="text-align-center">
            <article>Pierwsza obroża, która łącząc się z domową siecią wi-fi przekazuje informacje o szczekniu. Sąsiedzi nie będą już więcej wrzucać Ci listów do skrzynki o uciszeniu szczeniaka bądź nadpobudliwego pupila a przy tym nie zrobi mu krzywdy bo działa tylko na zasadzie wibracji.</article>
          </Row>
        </StyledHomeContainer>
        <Container>
          <Row className="mt-4">
            <StyledTextCol className="priority">
              <h3>Priorytety</h3>

              <article>am eget justo non nisl pretium aliquet. Vestibulum laoreet cursus eros, non tempor ex sagittis vitae.</article>
            </StyledTextCol >
            <Col >
              <Card bg="info" text="white" className="text-center p-3 mt-4">
                <blockquote className="blockquote mb-0 card-body">
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer posuere
                    erat a ante.
                  </p>
                  <footer className="blockquote-footer">
                    <small className="text-muted">
                      Someone famous in
                      {' '}
                      <cite title="Source Title">Source Title</cite>
                    </small>
                  </footer>
                </blockquote>
              </Card>
            </Col>
            <Col>
              <Card bg="info" text="white" className="text-center p-3 mt-4">
                <blockquote className="blockquote mb-0 card-body">
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer posuere
                    erat a ante.
                  </p>
                  <footer className="blockquote-footer">
                    <small className="text-muted">
                      Someone famous in
                      {' '}
                      <cite title="Source Title">Source Title</cite>
                    </small>
                  </footer>
                </blockquote>
              </Card>
            </Col>
            <Col>
              <Card bg="info" text="white" className="text-center p-3 mt-4">
                <blockquote className="blockquote mb-0 card-body">
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer posuere
                    erat a ante.
                  </p>
                  <footer className="blockquote-footer">
                    <small className="text-muted">
                      Someone famous in
                      {' '}
                      <cite title="Source Title">Source Title</cite>
                    </small>
                  </footer>
                </blockquote>
              </Card>
            </Col>
          </Row>
        </Container>
        {memoizedFooter}
      </div>
    </Fade>
  );
};
