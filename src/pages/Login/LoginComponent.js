import React from 'react';
import { useForm } from 'react-hook-form';
import { useHistory } from 'react-router-dom';
import {
 StyledLabel, StyledButton, StyledSpan, StyledInput,
} from '../../styled/styledForm';

export default ({ name, submitButtonText, handleOnSubmit, registerAccess }) => {
  const {
    register, handleSubmit, errors,
  } = useForm();
  const history = useHistory();

  const onSubmit = ({ email, password }) => handleOnSubmit(email, password).then(() => history.push('/dashboard'));
  return (
    <div>
      <h2>{name}</h2>
      <form onSubmit={handleSubmit(onSubmit)}>
        <StyledInput name="email" type="email" placeholder="adres email" ref={register({ required: true })} />
        {errors.email && <StyledSpan>e-mail jest wymagany!</StyledSpan>}
        <StyledInput className="password" name="password" type="password" placeholder="hasło" ref={register({ required: true, minLength: 6 })} />
        {errors.password && <StyledSpan>hasło jest wymagane!</StyledSpan>}
        <StyledButton block type="submit" variant="outline-success" disabled={registerAccess}>{submitButtonText}</StyledButton>
      </form>
    </div>
  );
};
