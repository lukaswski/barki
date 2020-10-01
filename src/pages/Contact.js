import React, { useMemo } from 'react';
import { Container, Fade, Col, Row } from 'react-bootstrap';
import Footer from './Footer';

export default () => {
  const MemoizedFooter = useMemo(() => <Footer />);
  return (
    <Fade in appear>
      <div>
        <Container >
          <Row className="mt-4">
            <Col>
            <h3>Poznajmy się!</h3>
            <article>
              Jeżeli chcesz porozmawiać na tematy związane z uciążliwym szczekaniem psa, zapraszam do kontaktu bezpośrednio mailem lub złap mnie na messendżerze, chętnie wymienię się doświadczeniami.
              <Row className="justify-content-md-center mt-5">
                wski.lukas@gmail.com
                facebook 
              </Row>
            </article>
            </Col>
    </Row>
          
            </Container>
        {MemoizedFooter}
      </div>
    </Fade>
  );
};
