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
              <h3>Poznajmy się!</h3>
              <article>
                Jeżeli chcesz porozmawiać na tematy związane z uciążliwym szczekaniem psa, zapraszam do kontaktu bezpośrednio mailem lub złap mnie na messendżerze, chętnie wymienię się doświadczeniami.
                <hr />
                <Row className="mt-5">
                  <Col>
                    <Button variant="link" block href="https://www.facebook.com/lukas.wski">Facebook</Button>
                  </Col>
                  <Col>
                    <Button variant="link" block href="mailto:wski.lukas@gmail.com">napisz do mnie maila</Button>
                  </Col>
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
