import React, { useMemo } from 'react';
import {
  Container, Fade, Row, Col, Badge,
} from 'react-bootstrap';
import Footer from '../components/Footer';
import TestItBarComponent from '../components/TestItBarComponent';
import { StyledImage, StyledTextCol } from '../styled/styledAbout';
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
            <Badge variant="info">w cenie, którą sam ustalasz...</Badge>
            <hr />
            <StyledImage className="barkFrontFlat" src={barkFrontFlat} rounded />
            <Row className="text-align-center">
              <p>
                Niezawodna konstrukcja, w połączeniu z siecią wi-fi
                pozwoli Ci na pełne monitorowanie
                zachowań Twojego psa. Nic Ci nie umknie, a pies będzie zadowolony z wygodnej obroży
              </p>
            </Row>
          </StyledHomeContainer>
          <Row className="mb-5 mt-5">
            <StyledTextCol md>
              <h3>Idea stojąca za obrożą</h3>
              <hr />
              <p>
                Koncepcja obroży antyszczekowej zrodziłą się z problemu posiadania
                <Badge variant="warning">wyjącego szczeniaka</Badge>
                {' '}
                w domu. Każde pozostawienie Riko samego kończyło się
                głośnymi ariami operowymi. Obserwacja Psiaka na
                kamerce domowej potwierdziła brak lęku
                separacyjnego a wycie powodowane było nudą. Pomimo posiadania zestawu zabawek!
                {' '}
              </p>
            </StyledTextCol>
            <Col md>
              <StyledImage className="barkiIdea" src={barkiLeft} rounded />
            </Col>
          </Row>
        </Container>
        <TestItBarComponent />
        <Container>
          <Row className="mb-5">
            <Col>
              <Container>
                <StyledImage className="barkiLeft" src={barkiSetup} rounded />
              </Container>
            </Col>
            <StyledTextCol md>
              <h3>Walka z wyciem</h3>
              <hr />
              <p>
                Gadżety z chin w walce z głośnym wyciem Riko okazały
                się wydanymi pieniędzmi. Większość z nich nie wytrzymała
                tygodnia i ulegała uszkodzeniu, lub nie spełniała podstawowych założeń - w nawet
                najmniejszym stopniu nie rozpraszała psa podczas wycia.
              </p>
            </StyledTextCol>
          </Row>
          <Row xl className="mt-4">
            <StyledTextCol md>
              <h3>Zestaw na piątkę!</h3>
              <hr />
              <p>
                Konstrukcja Barki powstała po analizie tego co najgorsze w obrożach oraz teg
                co mogło być na plus. Stąd, obroże zasilają akumulatorki lub
                standardowe baterie paluszki,
                obroża jest elastyczna by dopasować się do szyi psa,
                a rozpraszanie następuje tylko przez wibrację.
              </p>
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
              <p>
                Żadne inne obroże w tej cenie, nie kontrolują
                Twojego psa online. Ponadto zamawiając obrożę Barki,
                <Badge variant="warning">sam decydujesz</Badge>
                {' '}
                ile chcesz za nią zapłacić. a znaczna część z tej
                kwoty trafia na konto wybranych przez nas schronisk dla zwierząt!
              </p>
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
