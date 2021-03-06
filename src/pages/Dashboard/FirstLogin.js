import React from 'react';
import {
  Container, Col,
} from 'react-bootstrap';
import { useForm } from 'react-hook-form';
import { database } from '../../firebase/firebaseConfig';
import { StyledJumbotron, StyledInput, StyledButton } from '../../styled/styledForm';
import ModalForm from '../../utilities/ModalForm';

export default ({ userUid, firstLoginCards }) => {
  const { register, handleSubmit } = useForm();
  const writeDatabase = (data) => (
    database.ref(`users/${userUid}`).update(data)
  );

  const onSubmit = (data) => writeDatabase(data);
  const createInput = (...inputs) => (
    <form onSubmit={handleSubmit(onSubmit)}>
      {inputs.map((input) => (
        <StyledInput
          key={input}
          className="modalInputs"
          name={input}
          placeholder={input}
          ref={register({ required: true })}
        />
      ))}
      <StyledButton type="submit" variant="outline-success" block>Zapisz informację</StyledButton>
    </form>
  );
  return (
    <Container>
      <h2>
        Witaj w Barki!
      </h2>
      {firstLoginCards.map(({
        head, content, content1, button, key, handleInputs, title,
      }) => (
        <Col sm key={key}>
          <StyledJumbotron className={key}>
            <h3>{head}</h3>
            <hr />
            <div>{content}</div>
            <div>{content1}</div>
            <hr />
            <div>
              <ModalForm
                buttonName={button}
                inputs={createInput(...handleInputs)}
                modalTitle={title}
              />
            </div>
          </StyledJumbotron>
        </Col>
      ))}
    </Container>
  );
};
