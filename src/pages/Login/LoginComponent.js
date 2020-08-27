import React from 'react';
import { useForm } from 'react-hook-form';
import {
 StyledLabel, StyledButton, StyledSpan, StyledInput,
} from '../../styled/styledForm';

export default ({ name, submitButtonText, handleOnSubmit, registerAccess }) => {
  const {
    register, handleSubmit, errors,
  } = useForm();
  const onSubmit = ({ email, password }) => handleOnSubmit(email, password);
  return (

    <div>
      <h2>{name}</h2>
      <form onSubmit={handleSubmit(onSubmit)}>

        <StyledInput name="email" type="email" ref={register({ required: true })} />
        {errors.email && <StyledSpan>e-mail jest wymagany!</StyledSpan>}
        <StyledLabel>Adres email</StyledLabel>

        <StyledInput name="password" type="password" ref={register({ required: true, minLength: 6 })} />
        {errors.password && <StyledSpan>hasło jest wymagane!</StyledSpan>}
        <StyledLabel>hasło</StyledLabel>
        <StyledButton block type="submit" variant="outline-success" disabled={registerAccess}>{submitButtonText}</StyledButton>
      </form>
    </div>
  );
};
