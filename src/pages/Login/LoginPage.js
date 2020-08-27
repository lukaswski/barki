import React, { useState } from 'react';
import { Row, Col, Button } from 'react-bootstrap';
import {
  StyledContainer, StyledLabel, StyledButton,
} from '../../styled/styledForm';
import {
  authByProvider, facebookProvider, googleProvider, logout, createUserByPassword, authByPassword,
} from '../../firebase/firebaseConfig';
import LoginComponent from './LoginComponent';
import ResetPasswordModal from './ResetPasswordModal';

export default ({ registerButton }) => {
  const [rulesCheckbox, setRulesCheckbox] = useState(true);
  const [dataProcessCheckbox, setDataProcess] = useState(true);
  const [modalShow, setModalShow] = useState(false);

  const registerAccess = () => ((rulesCheckbox || dataProcessCheckbox) && !registerButton);

  return (
    <StyledContainer>
      {registerButton
        ? (
          <LoginComponent
            name="Logowanie do konta"
            submitButtonText="Zaloguj się"
            handleOnSubmit={authByPassword}
          />
        ) : (
          <LoginComponent
            name="Rejestracja nowego konta"
            submitButtonText="Zarejestruj się"
            handleOnSubmit={createUserByPassword}
            registerAccess={registerAccess()}
          />
        )}
      <hr />
      <StyledLabel>lub poprzez:</StyledLabel>
      <Row xs={1} md={1} className="justify-content-md-center">
        <Col>
          <StyledButton
            block
            disabled={registerAccess()}
            onClick={() => authByProvider(facebookProvider)}
          >
            Facebook
          </StyledButton>
        </Col>
        <Col>
          <StyledButton
            block
            disabled={registerAccess()}
            onClick={() => authByProvider(googleProvider)}
            variant="danger"
          >
            Google
          </StyledButton>
        </Col>
      </Row>
      {!registerButton ? (
        <div>
          <hr />
          <label>
            <input type="checkbox" onChange={() => setRulesCheckbox(!rulesCheckbox)} />
            {' '}
            Wyrażam zgodę na przetważanie danych osobowych
          </label>
          <label>
            <input type="checkbox" onChange={() => setDataProcess(!dataProcessCheckbox)} />
            {' '}
            Oświadczam, iż zapoznałem się z regulaminem Barki Collar dostępnym
            <a href="/rules"> tutaj </a>
          </label>
        </div>
      ) : (
        <div>
          nie pamiętasz hasła?
          <ResetPasswordModal
            show={modalShow}
            onHide={() => setModalShow(false)}
          />
        </div>
      ) }
    </StyledContainer>
  );
};
