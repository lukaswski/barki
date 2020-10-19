import React, { useMemo } from 'react';
import { Container } from 'react-bootstrap';
import Footer from '../components/Footer';

export default () => {
  const MemoizedFooter = useMemo(() => <Footer />);
  return (
    <>
      <Container>
        <h2>Ops! taka strona nie istnieje!</h2>
      </Container>
      {MemoizedFooter}
    </>
  );
};
