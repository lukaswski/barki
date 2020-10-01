import React, { useMemo } from 'react';
import { Container, Fade, Row, Col } from 'react-bootstrap';
import Footer from './Footer';
import { ImageDiv } from '../styled/styledComponents';

export default () => {
  const memoizedFooter = useMemo(() => <Footer />);
  return (
    <Fade in appear>
      <div>
        <Container >
            <h2>Poznaj historię obroży Barki</h2>
          <Row className="mt-4">
            <Col>
            <h3>Idea stojąca za obrożą</h3>
            <article>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</article>
            </Col>
          </Row>
          <Row className="mt-4">
            <Col>
          <h3>Jak to się zaczęło</h3>
          <article>Ut at fermentum nisi. Quisque posuere mattis gravida. Integer interdum et mauris vitae lacinia. Nam ac fringilla ipsum. Sed semper nulla odio, sed tempus erat elementum at. Proin neque dui, pharetra et augue ac, consectetur tristique eros. Etiam eget justo non nisl pretium aliquet. Vestibulum laoreet cursus eros, non tempor ex sagittis vitae.</article>
            </Col>
          </Row>
          </Container>

          <Container>
          <Row className="mt-4">
            <Col>
          <h3>Decyzja o własnej konstrukcji</h3>
          <article>Ut at fermentum nisi. Quisque posuere mattis gravida. Integer interdum et mauris vitae lacinia. Nam ac fringilla ipsum. Sed semper nulla odio, sed tempus erat elementum at. Proin neque dui, pharetra et augue ac, consectetur tristique eros. Etiam eget justo non nisl pretium aliquet. Vestibulum laoreet cursus eros, non tempor ex sagittis vitae.</article>
            </Col>
          </Row>
          <Row className="mt-4">
            <Col>
          <h3>Priorytety</h3>
          <article>Ut at fermentum nisi. Quisque posuere mattis gravida. Integer interdum et mauris vitae lacinia. Nam ac fringilla ipsum. Sed semper nulla odio, sed tempus erat elementum at. Proin neque dui, pharetra et augue ac, consectetur tristique eros. Etiam eget justo non nisl pretium aliquet. Vestibulum laoreet cursus eros, non tempor ex sagittis vitae.</article>
            </Col>
          </Row>
        </Container>
        {memoizedFooter}
      </div>
    </Fade>
  );
};
