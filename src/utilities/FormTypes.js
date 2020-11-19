import React from 'react';
import { useForm } from 'react-hook-form';
import { StyledInput, StyledButton, StyledTextarea, StyledSpan } from '../styled/styledForm';

export default () => {
  const {
    register, handleSubmit, watch, errors,
  } = useForm();
  const onSubmit = (data) => console.log(data);

  return (

    <form onSubmit={handleSubmit(onSubmit)}>
      <StyledInput name="name" placeholder="podpis" ref={register({ required: true })} />
      {errors.name && <StyledSpan>Pole jest wymagane.</StyledSpan>}
      <StyledInput type="email" name="email" placeholder="email" ref={register({ required: true })} />
      {errors.email && <StyledSpan>Pole jest wymagane.</StyledSpan>}
      <StyledTextarea type="text" name="txt" block placeholder="treść wiadomości" ref={register({ required: true })} />
      {errors.txt && <StyledSpan>Pole jest wymagane.</StyledSpan>}
      <StyledButton
        type="submit"
        variant="info"
        block
      >
        Wyślij wiadomośc
      </StyledButton>
    </form>
  );
};
