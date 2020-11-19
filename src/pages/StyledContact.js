import styled from 'styled-components';
import { Col } from 'react-bootstrap';
import contactPug from '../img/contactPug.png';
import contactPugLeft from '../img/contactPugLeft.png';

export const StyledContainer = styled.div`
  display: block;
  background-image: url('${contactPug}');
  background-size: auto;
  background-repeat: no-repeat;
  height: 100vh;
  background-position-x: -100px;
  background-position-y: -50px;
  padding-top: 150px;
    @media(max-width: 567px){
      background-image: url('${contactPugLeft}');
      background-position-x: 0px;
      background-position-y: -150px;
    }
`;

export const StyledCol = styled(Col)`
  margin-top: 20px;
  text-align:center;
  font-style: italic;
  color: darkgray;
`;
