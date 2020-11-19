import React from 'react';
import {
  Container, Fade, Col, Row, Alert, Button,
} from 'react-bootstrap';
import { BackgroundCol } from '../styled/StyledPrices';
import Footer from '../components/Footer';
import TestItBarComponent from '../components/TestItBarComponent';
import { PRICES } from '../utilities/textContent';

export default () => (
  <Fade in appear>
    <div>
      <Container>
        <Row className="mt-4">
          <h1>Ile kosztuje obroża?</h1>
        </Row>
        <Row className="mt-5">
          <Col md>
            <Container>
              <h3>
                Będziesz w szoku ponieważ kupując obrożę Barki
                <b> pomagasz psom w schroniskach.</b>
              </h3>
              <p>
                Cena skłąda się z kosztu części oraz przesyłki + datek na schronisko w
                <b> wybranej przez Ciebie kwocie.</b>
              </p>
            </Container>
            {PRICES.map(({ price, content, id }) => (
              <Alert key={id} variant="light">
                <Alert.Heading>
                  Datek w wysokości
                    <b>
                      {price}
                    </b>
                </Alert.Heading>
                <p>
                  {content}
                </p>
                <hr />
                <div className="d-flex justify-content-end">
                  <Alert>
                      Cena podstawowa
                      <b> 150zł </b>
                      plus
                      {' '}
                      <Button variant="outline-success">
                        datek w wysokości
                        {' '}
                        <b>{price}</b>
                      </Button>
                    </Alert>
                </div>
              </Alert>
            ))}
          </Col>
          <BackgroundCol md />
        </Row>
      </Container>
      <TestItBarComponent />
      <Footer />
    </div>
  </Fade>
);
