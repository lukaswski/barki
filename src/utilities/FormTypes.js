import React from 'react';
import { useForm } from 'react-hook-form';
import { StyledInput, StyledButton } from '../styled/styledForm';

export default ({ setShow }) => {
  const { register, handleSubmit, watch, errors } = useForm();
  const onSubmit = (data) => console.log(data);

  return (

          <form onSubmit={handleSubmit(onSubmit)}>
            <StyledInput name="name" placeholder='Imię' ref={register} />
            <StyledInput name="surname" placeholder="Nazwisko" ref={register} />
            <StyledInput name="" placeholder="Nazwisko" ref={register} />
            {errors.exampleRequired && <span>This field is required</span>}
            <StyledButton
              type="submit"
              variant="outline-success"
              onClick={() => setShow(false)}
              block
            >Zapisz informację</StyledButton>
          </form>
  );
};
