import React, { useState } from 'react';
import { Modal } from 'react-bootstrap';
import { StyledButton } from '../styled/styledForm';

export default ({ buttonName, inputs }) => {
  const [show, setShow] = useState(false);

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
            {inputs}
        </Modal.Body>
      </Modal>
    </>
  );
};
