import React, { useState } from 'react';
import { Modal, Button, Alert } from 'react-bootstrap';
import { StyledButton, StyledInput } from '../../styled/styledForm';
import { passwordReset } from '../../firebase/firebaseConfig';

const ResetPasswordModal = (props) => {
  const [PaswordValue, setPaswordValue] = useState();
  const [alert, setAlert] = useState(false);

  const handleResetPassword = (e) => setPaswordValue(e.target.value);
  const handleSubmitReset = () => (
    passwordReset(PaswordValue),
    setAlert(true)
);
  return (
    <Modal
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
          Resetowanie hasła do konta
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <div>
          Podaj adres na który chcesz otrzymać link do resetowania hasła
        </div>
        {alert && <Alert variant="success">Na podany poniżej adres wysłaliśmy link do resetowania hasła</Alert>}
        <StyledInput name="email" type="email" placeholder="email" onChange={handleResetPassword} className="passwordReset" />
      </Modal.Body>
      <Modal.Footer>
        <Button onClick={handleSubmitReset} variant="warning">Resetuj</Button>
        <Button onClick={props.onHide} variant="outline-danger">Anuluj</Button>
      </Modal.Footer>
    </Modal>
  );
};

export default () => {
  const [modalShow, setModalShow] = React.useState(false);

  return (
    <>
      <StyledButton className="resetPasswordLink" variant="link" block onClick={() => setModalShow(true)}>
        resetuj hasło
      </StyledButton>
      <ResetPasswordModal
        show={modalShow}
        onHide={() => setModalShow(false)}
      />
    </>
  );
};
