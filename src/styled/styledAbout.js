import styled from 'styled-components';
import { Col, Image } from 'react-bootstrap';

export const StyledImage = styled(Image)`
  margin-top: 60px;
    &.barkFrontFlat{
      width: 80%;
      margin-top: 20px;
      margin-bottom: 20px;
      width: 100%;  
    };
    &.barkiLeft{
        width: 100%; 
        margin-top: 10px;
      }
    &.barkiIdea{
      width: 85%;
    }
  };
`;

export const StyledTextCol = styled(Col)`
  text-align: center;
  padding-top: 15%;
   &.priority{
    padding-top: 5%;
   }
`;