import React, { useMemo } from 'react';
import { Container, Fade } from 'react-bootstrap';
import Footer from './Footer';

export default () => {
  const MemoizedFooter = useMemo(() => <Footer />);
  return (
    <Fade in appear>
      <div>
        <Container>
          <h2>Kontakt do mnie!</h2>
        </Container>
        {MemoizedFooter}
      </div>
    </Fade>
  );
};
