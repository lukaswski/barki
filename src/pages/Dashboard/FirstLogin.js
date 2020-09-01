import React from 'react';
import {
  Container, Col,
} from 'react-bootstrap';
import { useForm } from 'react-hook-form';
import { database } from '../../firebase/firebaseConfig';
import { StyledJumbotron, StyledInput, StyledButton } from '../../styled/styledForm';
import ModalForm from '../../utilities/ModalForm';
import { DASHBOARD_CARD_CONTENT } from '../../utilities/textContent';

export default ({userUid, userName}) => {
  const {
    register, handleSubmit, watch, errors,
  } = useForm();

  const writeDatabase = (data) => database.ref(`users/${userName} - ${userUid}`).update(data);

  const onSubmit = (data) => (writeDatabase(data));

  const createInput = (...inputs) => (
    <form onSubmit={handleSubmit(onSubmit)}>
      {inputs.map((input) => (<StyledInput className="modalInputs" name={input} placeholder={input} ref={register} />))}
      <StyledButton type="submit" variant="outline-success" block>Zapisz informację</StyledButton>
    </form>
  );
  return (
    <Container>
      <h2>
        Witaj w Barki!
      </h2>
      {DASHBOARD_CARD_CONTENT.map(({
        head, content, content1, button, key, inputs, title,
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
                modalTitle={title}
              />
            </p>
          </StyledJumbotron>
        </Col>
      ))}
    </Container>
  );
};
