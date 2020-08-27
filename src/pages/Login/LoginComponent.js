import React from 'react';
import { useForm } from 'react-hook-form';
import {
 StyledLabel, StyledButton, StyledSpan, StyledInput,
} from '../../styled/styledForm';

export default ({ name, submitButtonText, handleOnSubmit }) => {
  const {
    register, handleSubmit, watch, errors,
  } = useForm();
  const onSubmit = ({ email, password }) => handleOnSubmit(email, password);
  return (

    <div>
      <h2>{name}</h2>
      <form onSubmit={handleSubmit(onSubmit)}>

        <StyledLabel>Adres email</StyledLabel>
        <StyledInput name="email" type="email" ref={register({ required: true })} />
        {errors.email && <StyledSpan>e-mail jest wymagany!</StyledSpan>}

        <StyledLabel>hasło</StyledLabel>
        <StyledInput name="password" type="password" ref={register({ required: true, minLength: 6 })} />
        {errors.password && <StyledSpan>hasło jest wymagane!</StyledSpan>}

        <StyledButton type="submit" variant="outline-success">{submitButtonText}</StyledButton>
      </form>
    </div>
  );
};
