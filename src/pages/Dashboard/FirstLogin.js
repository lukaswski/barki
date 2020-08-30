import React from 'react';
import {
  Container, Col,
} from 'react-bootstrap';
import { StyledJumbotron } from '../../styled/styledForm';
import ModalForm from '../../utilities/ModalForm';
import { DASHBOARD_CARD_CONTENT } from '../../utilities/textContent';

export default () => (
  <Container>
    <h2>
      Witaj w Barki!
    </h2>
    {DASHBOARD_CARD_CONTENT.map(({
      head, content, content1, button, key,
    }) => (
      <Col sm key={key}>
        <StyledJumbotron className={key}>
          <h3>{head}</h3>
          <hr />
          <p>{content}</p>
          <p>{content1}</p>
          <hr />
          <p><ModalForm buttonName={button} /></p>
        </StyledJumbotron>
      </Col>
    ))}
  </Container>
);
