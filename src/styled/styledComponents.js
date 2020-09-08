import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { Button } from 'react-bootstrap';
import hero from '../img/hero.jpg';
import heroMed from '../img/heroMed.jpg';
import heroMobile from '../img/heroMobile.jpg';

export const StyledLink = styled(Link)`
  color: dimgray;
  margin: 10px 1rem;
  :hover {
    text-decoration: none;
    color: black;
  }
    &.logo{
      font-size: 1.4rem;
      color: black;
      letter-spacing: 2px;
      font-weight: 500;
    }
`;

export const StyledHero = styled.div`
  width: 100%;
  height: 90vh;
  background-size: cover;
  background-image: url('${hero}');
    @media(max-width: 1000px){
      background-image: url('${heroMed}');
    }
    @media(max-width: 680px){
      background-image: url('${heroMobile}');
    }
`;
export const HeroSlogan = styled.div`
  height: 40vh;
  padding-top: 20vh;
  margin-bottom: 20px;
  padding-bottom: 0;
  text-shadow: 10px 10px 20px dimgrey;
  color:white;
  font-size: 3.0rem;
   @media(max-width: 780px){
      padding-top: 30px;
      font-size: 2.5rem;
      margin-bottom: 40px;
    }
   @media(max-width: 500px){
      padding-top: 60px;
      text-align: center;
    }
`;

export const HeroButton = styled(Button)`
  width: 100%;
  opacity: 80%;
  margin-top: 90px;
  box-shadow: 10px 10px 20px dimgrey;
    @media(max-width: 850px){
      margin-top: 160px;
      text-align: center;
    }
  
`;
