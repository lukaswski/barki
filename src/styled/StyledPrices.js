import styled from 'styled-components';
import { Col } from 'react-bootstrap';
import pricesDog from '../img/pricesDog.png';

export const BackgroundCol = styled(Col)`
  background-image: url('${pricesDog}');
  width: 100vw;
  height: 90vh;
  background-size: cover;
`;