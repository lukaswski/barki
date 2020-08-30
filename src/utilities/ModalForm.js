import React, { useState } from 'react';
import { Modal, Button } from 'react-bootstrap';
import { useForm } from 'react-hook-form';
import { StyledInput, StyledButton } from '../styled/styledForm';

export default ({ buttonName }) => {
  const [show, setShow] = useState(false);
  const { register, handleSubmit, watch, errors } = useForm();
  const onSubmit = (data) => console.log(data);

  return (
    <>
      <StyledButton className="DashboardCardButton" variant="outline-primary" block onClick={() => setShow(true)}>
        {buttonName}
      </StyledButton>
      <Modal
        show={show}
        onHide={() => setShow(false)}
      >
        <Modal.Header closeButton>
          <Modal.Title id="example-custom-modal-styling-title">
            {buttonName}
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>

          <form onSubmit={handleSubmit(onSubmit)}>
            <StyledInput name="name" placeholder="Imię" ref={register} />
            <StyledInput name="surname" placeholder="Nazwisko" ref={register} />
            <StyledInput name="" placeholder="Nazwisko" ref={register} />
            {errors.exampleRequired && <span>This field is required</span>}
            <StyledButton type="submit" variant="outline-success" onClick={() => setShow(false)} block>Zapisz informację</StyledButton>
          </form>
        </Modal.Body>
      </Modal>
    </>
  );
};
