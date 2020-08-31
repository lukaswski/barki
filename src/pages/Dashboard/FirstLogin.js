import React, { useState } from 'react';
import {
  Container, Col,
} from 'react-bootstrap';
import { useForm } from 'react-hook-form';
import { StyledJumbotron, StyledInput, StyledButton } from '../../styled/styledForm';
import ModalForm from '../../utilities/ModalForm';
import { DASHBOARD_CARD_CONTENT } from '../../utilities/textContent';

export default () => {
  const {
    register, handleSubmit, watch, errors,
  } = useForm();
  const [show, setShow] = useState(false);
  const onSubmit = (data) => console.log(data);

  const createInput = (...args) => (
    <form onSubmit={handleSubmit(onSubmit)}>
      {args.map((arg) => (<StyledInput name={arg} placeholder={arg} ref={register} />))}
      <StyledButton type="submit" variant="outline-success" onClick={() => setShow(false)} block>Zapisz informację</StyledButton>
    </form>
  );

  return (
    <Container>
      <h2>
        Witaj w Barki!
      </h2>
      {DASHBOARD_CARD_CONTENT.map(({
        head, content, content1, button, key, inputs,
      }) => (
        <Col sm key={key}>
          <StyledJumbotron className={key}>
            <h3>{head}</h3>
            <hr />
            <p>{content}</p>
            <p>{content1}</p>
            <hr />
            <p>
              <ModalForm
                buttonName={button}
                inputs={createInput(...inputs)}
              />
            </p>
          </StyledJumbotron>
        </Col>
      ))}
    </Container>
  );
};
