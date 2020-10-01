import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { Button, Row, Card } from 'react-bootstrap';
import hero from '../img/hero.jpg';
import heroMed from '../img/heroMed.jpg';
import heroMobile from '../img/heroMobile.jpg';
import NotLogged from '../img/notLogged.jpg';
import notLoggedMobile from '../img/notLoggedMobile.jpg';
import Footer from '../img/Footer.jpg';
import FooterMid from '../img/FooterMid.jpg';
import FooterMobile from '../img/FooterMobile.jpg';

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
    &.notLoggedLink{
      margin: auto;
    }
`;

export const NotLoggedBackground = styled.div`
  width: 100%;
  height: 650px;
  background-image: url('${NotLogged}');
  background-size: cover;
  @media(max-width: 1000px){
        background-image: url('${notLoggedMobile}');
    }
`;

export const NotLoggedText = styled.div`
  font-size: 3rem;
  width: 500px;
  margin-left: 50%;
  padding: 10% 0;
    &.notLoggedTitle{
      margin-left: 0;
      @media(max-width: 600px){
        margin-bottom: 240px;
      }
    }
    &.subtitle{
      text-align: center;
      font-size: 16px;
      padding: 10px 0;
      font-style: italic;
      margin:auto;
      };
  @media(max-width: 1000px){
      margin: 0 auto;
      width: 80%;
    };
  @media(max-width: 800px){
    font-size: 2rem;
      margin: 0 auto;
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
    @media(max-width: 300px){
      font-size: 2.0rem;
    }
`;

export const HeroButton = styled(Button)`
  width: 100%;
  opacity: 90%;
  margin-top: 90px;
  box-shadow: 10px 10px 20px dimgrey;
    @media(max-width: 850px){
      margin-top: 160px;
      text-align: center;
    }
  
`;

export const StyledFooter = styled.div`
  margin-top: 50px;
  width:100%;
  height: 850px;
  background-image: url('${Footer}');
  background-size: cover;
      @media(max-width: 1000px){
        background-image: url('${FooterMid}');
        height: 900px;
    }
    @media(max-width: 420px){
        background-image: url('${FooterMobile}');
        height: 920px;
    }
  
`;
export const StyledFooterRow = styled(Row)`
width: 100%;
  padding-top: 40px;
  display: inline-block;
  font-size: 24px;
  &.form{
    margin-top: 0;
    padding-top: 0;
  }
  &.subtitle{
    font-size: 18px;
    padding-top:5px;
  }
  &.ownerInfo{
    margin: 0;
    padding: 75px 35% 0 35%;
    display: inline-block;
    width: 100%;
    text-align: center;
    font-size: 14px;
    letter-spacing: 2px;
    @media(max-width: 660px){
        padding: 150px 10% 0 10%;
    }
    @media(max-width: 420px){
        padding: 220px 10% 0 10%;
    }
  }
`;

export const StyledSettingsCard = styled(Card)`
  margin-top: 25px;
`;
