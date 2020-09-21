import React, { useEffect, useState } from 'react';
import {
  Container, Fade, Spinner, Row, Col,
} from 'react-bootstrap';

export default () => {
  const [spinner, setSpinner] = useState(<Row className="justify-content-md-center">
    <Spinner animation="border" variant="info" />
  </Row>);
  useEffect(() => {
    setTimeout(() => setSpinner(<div>Nie jesteś zalogowany!</div>), 2000);
  }, []);
  return (

    <Fade in appear>
      <Container>
        {spinner}
      </Container>
    </Fade>
  );
};
