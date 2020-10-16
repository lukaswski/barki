import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { Button, Row, Card, Jumbotron, Container } from 'react-bootstrap';
import hero from '../img/hero.jpg';
import heroMed from '../img/heroMed.jpg';
import heroMobile from '../img/heroMobile.jpg';
import NotLogged from '../img/notLogged.jpg';
import notLoggedMobile from '../img/notLoggedMobile.jpg';
import Footer from '../img/Footer.jpg';
import FooterMid from '../img/FooterMid.jpg';
import FooterMobile from '../img/FooterMobile.jpg';
import FooterDogs from '../img/FooterDogs.jpg';

export const StyledHomeContainer = styled(Container)`
  padding-top: 80px;
  height: 600px;
  margin-top: 0px;
  background-color: #E3F2FD;
  opacity: 0.85;
    &.about {
      height: 400px;
      background-color: white;
      text-align: center;
      padding:  10% 20%;
    }
    &.assets {
      height: 500px;
      background-color: #ffffff;
      background-image: linear-gradient(180deg, #ffffff 1%, #b1fdfd 66%);
      text-align: center;
      @media(max-width: 570px){
        height: 1200px;
    }
      @media(max-width: 768px){
        height: 1000px;
    }
      @media(max-width: 470px){
        height: 1200px;
    }
    }
    &.howItWorks{
      margin-top: 120px;
      margin-top: 0px;

      height: 800px;
      background-color: #ffd4d8;
      background-image: linear-gradient(180deg, #ffd4d8 0%, #ffffff 100%);
    }
    &.callToAction{
      height: 600px;
      background-position: center; /* Center the image */
      background-repeat: no-repeat; /* Do not repeat the image */
      background-size: cover; /* Resize the background image to cover the entire container */
      background-attachment: fixed;
      background-image: url('${FooterDogs}');
    }
`;

export const Styledtext = styled.div`
  color:grey;
  font-style: italic;
  font-size: 14px;
    &.dogInformation{
    display: inline;
    font-size: 16px;
  }  
`;

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
  width:100%;
  height: 800px;
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
