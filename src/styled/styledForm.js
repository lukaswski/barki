import styled from 'styled-components';
import { Button, Container } from 'react-bootstrap';

export const StyledContainer = styled(Container)`
  margin-top: 20px; 
  width: 50vw;
`;
export const StyledButton = styled(Button)`
  margin: 5px auto;
  width: 100%;
`;
export const StyledInput = styled.input`
  margin: 5px auto;
  height: 40px;
  border: 0;
  border-bottom: 1px solid;
  width: 100%;
    :focus {
      background-color: whitesmoke;
      outline: none;
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
