import React from 'react';
import {
  Fade, Col, Row, Button,
} from 'react-bootstrap';
import { StyledContainer, StyledCol } from '../styled/StyledContact';
import Footer from '../components/Footer';

export default () => {

  return (
    <Fade in appear>
      <div>
        <StyledContainer>
          <Col md={{ span: 5, offset: 5 }}>
            <h3>Poznajmy się!</h3>
            <hr />
            <p>
              Jeżeli chcesz porozmawiać na tematy związane z uciążliwym szczekaniem psa,
              zapraszamy do kontaktu bezpośrednio mailem lub poprzez kontakt na messendżerze,
              chętnie wymienimy się doświadczeniami.
            </p>
            <Row md className="mt-5">
              <Col sm className="mb-3">
                <Button variant="outline-info" block href="https://www.facebook.com/lukas.wski">facebook</Button>
              </Col>
              <Col sm>
                <Button variant="outline-danger" block href="mailto:wski.lukas@gmail.com">e-mail</Button>
              </Col>
            </Row>
            <StyledCol>
              Gdy tylko znajdziemy trochę czasu odpowiemy
              najszybciej jak to możliwe.
            </StyledCol>
          </Col>
        </StyledContainer>
        <Footer />
      </div>
    </Fade>
  );
};
