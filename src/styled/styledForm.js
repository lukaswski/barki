import styled from 'styled-components';
import { Button, Container, Jumbotron } from 'react-bootstrap';

export const StyledContainer = styled(Container)`
  margin-top: 20px; 
  width: 50vw;
    @media(max-width: 830px){
      width: 100vw;
    }
`;
export const StyledButton = styled(Button)`
  margin-top: 15px ;
  &.DashboardCardButton{
    margin-top: 50px;
    margin-bottom: 10px;
  }
  &.resetPasswordLink{
    width: 30%;
    margin: 0 auto;
  }
`;
export const StyledInput = styled.input`
  height: 40px;
  font-size: 12px;
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
    &.modalInputs{
      width: 80%; 
      margin-left: auto; 
      margin-right: auto;
      display: block
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
  font-size: 14px;
`;

export const StyledJumbotron = styled(Jumbotron)`
  align-items: center;
  width: 49%;
  float: left;
  padding-bottom: 10px;
  &.first{
    width:100%;
  };
  &.third{
    margin-left: 2%;
  };
  @media(max-width: 768px){
    width:100%;
    &.third{
    margin-left: 0;
  }
`;

export const StyledTextarea = styled.textarea`
  height: 80px;
  border: 0;
  font-size: 12px;
  resize: none;
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
    &.modalInputs{
      width: 80%; 
      margin-left: auto; 
      margin-right: auto;
      display: block
    }
`;
