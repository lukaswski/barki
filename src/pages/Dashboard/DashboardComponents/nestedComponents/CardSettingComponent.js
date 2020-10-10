import React, { useContext } from 'react';
import {
  Button, Card, InputGroup, FormControl, Alert, Collapse,
} from 'react-bootstrap';
import { useForm } from 'react-hook-form';
import { database } from '../../../../firebase/firebaseConfig';
import { LoginContext } from '../../../../contexts/LoginContext';
import { StyledSettingsCard } from '../../../../styled/styledComponents';

const writeDatabase = (data, uid) => {
  database.ref(`users/${uid}`).update(
    data,
  );
};

export default ({
  title, dataValue, userDataValue,
}) => {
  const { user, userData } = useContext(LoginContext);
  const [userValue, setUserValue] = user;

  const TitleDisplay = (data) => Object.keys(userDataValue).map((value) => (value === data && userDataValue[data]));

  const {
    register, handleSubmit, errors,
  } = useForm();
  const onSubmit = (data) => {
    writeDatabase(data, userValue.uid);
    alert('zmieniono pomyślnie');
  };

  return (
    <StyledSettingsCard className="text-center">
      <Card.Header>{title}</Card.Header>
      <Card.Body>
        <Card.Title><h3>{TitleDisplay(dataValue)}</h3></Card.Title>
        <form onSubmit={handleSubmit(onSubmit)}>
          <InputGroup className="mb-3">
            <FormControl
              placeholder="zmień informację"
              aria-describedby="basic-addon2"
              ref={register({ required: true })}
              name={dataValue}
            />
            <InputGroup.Append>
              <Button variant="outline-secondary" type="submit">zmień</Button>
            </InputGroup.Append>
          </InputGroup>
          {errors[dataValue] && (
          <Collapse in appear>
            <div>
              <Alert variant="warning">
                Pole jest wymagane jeśli chcesz zmienic informacje
              </Alert>
            </div>
          </Collapse>
          )}
        </form>
      </Card.Body>
    </StyledSettingsCard>
  );
};
