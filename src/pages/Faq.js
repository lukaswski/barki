import React from 'react';
import {
  Container, Accordion, Card, Jumbotron,
} from 'react-bootstrap';
import { FAQ_SITE_CONTENT, FAQ_ACCORDION_CONTENT } from '../utilities/textContent';
import Footer from '../components/Footer';
import TestItBarComponent from '../components/TestItBarComponent';

const { title, subtitle } = FAQ_SITE_CONTENT;

export default () => (
  <>
    <Container>
      <Jumbotron fluid>
        <Container>
          <h3>{title}</h3>
          <p>
            {subtitle}
          </p>
        </Container>
      </Jumbotron>
      <Accordion defaultActiveKey="0">
        {FAQ_ACCORDION_CONTENT.map(({ key, question, answer }) => (
          <Card key={key}>
            <Accordion.Toggle as={Card.Header} eventKey={key}>
              {question}
            </Accordion.Toggle>
            <Accordion.Collapse eventKey={key}>
              <Card.Body>{answer}</Card.Body>
            </Accordion.Collapse>
          </Card>
        ))}
      </Accordion>
    </Container>
    <TestItBarComponent />
    <Footer />
  </>
);
