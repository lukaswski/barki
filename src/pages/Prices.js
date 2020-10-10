import React, { useMemo } from 'react';
import {
  Container, Fade, Col, Row, Button,
} from 'react-bootstrap';
import Footer from './Footer';

export default () => {
  const MemoizedFooter = useMemo(() => <Footer />);
  return (
    <Fade in appear>
      <div>
        <Container>
          <Row className="mt-4">
            <Col className="mt-4">
              <h3>Ile kosztuje obroża?</h3>
              <article>
                Jeżeli chcesz porozmawiać na tematy związane z uciążliwym szczekaniem psa, zapraszam do kontaktu bezpośrednio mailem lub złap mnie na messendżerze, chętnie wymienię się doświadczeniami.
              </article>
            </Col>
          </Row>

        </Container>
        {MemoizedFooter}
      </div>
    </Fade>
  );
};
