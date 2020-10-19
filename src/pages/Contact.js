import React, { useMemo } from 'react';
import {
  Container, Fade, Col, Row, Button,
} from 'react-bootstrap';
import { StyledContainer } from '../styled/StyledContact'; 
import Footer from '../components/Footer';

export default () => {
  const MemoizedFooter = useMemo(() => <Footer />);
  return (
    <Fade in appear>
      <div>
        <StyledContainer>
          <Row className="mt-4">
            <Col className="mt-4">
              <h3>Poznajmy się!</h3>
              <p>
                Jeżeli chcesz porozmawiać na tematy związane z uciążliwym szczekaniem psa,
                zapraszam do kontaktu bezpośrednio mailem lub złap mnie na messendżerze,
                chętnie wymienię się doświadczeniami.
                <hr />
                <Row className="mt-5">
                  <Col>
                    <Button variant="outline-info" block href="https://www.facebook.com/lukas.wski">Facebook</Button>
                  </Col>
                  <Col>
                    <Button variant="outline-danger" block href="mailto:wski.lukas@gmail.com">napisz do mnie maila</Button>
                  </Col>
                </Row>
              </p>
            </Col>
          </Row>

        </StyledContainer>
        {MemoizedFooter}
      </div>
    </Fade>
  );
};
