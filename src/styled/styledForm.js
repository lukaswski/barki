import styled from 'styled-components';
import { Button, Container } from 'react-bootstrap';

export const StyledContainer = styled(Container)`
  margin-top: 20px; 
  width: 50vw;
    @media(max-width: 830px){
      width: 100vw;
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
  margin-top: 30px;
    :focus {
      background-color: whitesmoke;
      outline: none;
    }
    &.password{
      margin-bottom: 50px;
    }
`;
export const StyledLabel = styled.label`
  margin: 10px auto;
  color: grey;
  width:100%;
`;
export const StyledSpan = styled.div`
  margin: 5px auto;
  color: red;
  font-size: 15px;
`;
