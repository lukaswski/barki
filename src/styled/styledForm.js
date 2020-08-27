import styled from 'styled-components';
import { Button, Container } from 'react-bootstrap';

export const StyledContainer = styled(Container)`
  margin-top: 20px; 
  width: 50vw;
    @media(max-width: 800px){
      width: 80vw;
    }
`;
export const StyledButton = styled(Button)`
  margin: 5px auto;
`;
export const StyledInput = styled.input`
  height: 40px;
  border: 0;
  border-bottom: 1px solid;
  padding-left: 10%;
  width: 100%;
    :focus {
      background-color: whitesmoke;
      outline: none;
    }
    &.passwordReset {
      width: 60%;
      
    }
`;
export const StyledLabel = styled.label`
  margin: 10px auto;
  color: grey;
`;
export const StyledSpan = styled.div`
  margin: 5px auto;
  color: red;
  font-size: 15px;
`;
