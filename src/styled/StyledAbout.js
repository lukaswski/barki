import React from 'react';
import styled from 'styled-components';
import { Container, Fade, Row, Col, Image } from 'react-bootstrap';

export const StyledImage = styled(Image)`
  width: 100%;
  height: 500px;
  background-size: cover;
`

export const StyledTextCol = styled(Col)`
  text-align: center;
  padding-top: 15%;
   &.priority{
    padding-top: 5%;
   }
`