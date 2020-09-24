import React, { useMemo } from 'react';
import { Container, Fade } from 'react-bootstrap';
import Footer from './Footer';

export default () => {
  const memoizedFooter = useMemo(() => <Footer />);
  return (
    <Fade in appear>
      <div>
        <Container>
          About
        </Container>
        {memoizedFooter}
      </div>
    </Fade>
  );
};
