/* eslint-disable import/prefer-default-export */
import styled from 'styled-components';
import { Col, Button, Container } from 'react-bootstrap';
import dogAvatar from '../img/dogAvatar.jpg';

export const DogAvatar = styled.div`
  background-image: url('${dogAvatar}');
  background-size: cover;
  border: 2px grey solid;
  box-shadow: 5px 5px 5px grey;
  border-radius: 25%;
  width: 60px;
  height: 60px;
  transform: translateY(-7px);
`;
export const BackgroundContainer = styled(Container)`
  padding: 20px;
  height: 100vh;
`;
