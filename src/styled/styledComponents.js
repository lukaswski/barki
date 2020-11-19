import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { Button, Row, Col, Card, Jumbotron, Container, Image } from 'react-bootstrap';
import hero from '../img/hero.png';
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
    &.ownConstruction{
      opacity: 1;
      height: 650px;
      background-color: white;
      text-align: center;
      width: 70%;
      @media(max-width: 991px){
        width: 100%;
      }
    }
    &.barkiCardboard{
      opacity: 1;
      height: 1250px;
      background-color: white;
      text-align: center;
      padding:  10% 20%;
    }
    &.about {
      height: 100%;
      background-color: white;
      text-align: center;
      width: 100%;
      padding:  10% 20%;
      opacity: 1;
    }
    &.lastCallToAction {
      height: 600px;
      background-color: white;
      text-align: center;
      padding:  10% 20%;
    }
    &.assets {
      height: 600px;
      background: rgb(255,255,255);
      background: linear-gradient(180deg, rgba(255,255,255,0.804359243697479) 5%, rgba(243,246,251,1) 26%, rgba(232,239,247,1) 41%, rgba(232,239,247,1) 55%, rgba(229,237,246,1) 77%, rgba(216,228,242,1) 94%);
      text-align: center;
      @media(max-width: 570px){
        height: 1300px;
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
      height: 1000px;
      background-color: white;
        @media(max-width: 1000px){
          height: 1200px;
            }
        @media(max-width: 768px){
          height: 1600px;
            }
        @media(max-width: 570px){
          height: 1700px;
            }
        @media(max-width: 475px){
          height: 1800px;
            }
        @media(max-width: 365px){
          height: 2000px;
            }
    }
    &.callToAction{
      height: 600px;
      background-position: center; 
      background-repeat: no-repeat; 
      background-size: cover; 
      background-attachment: fixed;
      background-image: url('${FooterDogs}');
    }
`;

export const StyledDogImage = styled(Image)`
    border-radius: 40%;
    display: block;
    margin-left: auto;
    margin-right: auto;
    width: 200px;
    opacity: 0.9;
    height: 200px;
    
      &.num{
         opacity: 0.2;
      };
      &.numYelow{
        opacity: 0.2;
      };
}`;

export const NumberHolderColumn = styled(Col)`
  @media(max-width: 768px){
    height: 80px;
  }
`;

export const StyledColumnText = styled(Col)`
    font-size: 24px;
    padding-top: 20px;
    text-align: left;
    margin-top: auto;
    margin-bottom: auto; 
   
      &.yelowDog{
        text-align: right;
        @media(max-width: 768px){
        text-align: left;
        font-size: 24px;
  }
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
  width:100%;
  height: 100vh;
  background-size: cover;
  background-image: url('${hero}');
    @media(max-width: 1000px){
      background-image: url('${heroMed}');
    }
    @media(max-width: 680px){
      background-image: url('${heroMobile}');
    }
`;
export const HeroSlogan = styled.h1`
  color: white; 
  font-size: 55px;
  margin-top: 200px;
  text-align: right;
  text-shadow: 5px 10px 5px black;
    @media(max-width: 850px){
       margin-top: 60px;
       font-size: 45px;
    }
    @media(max-width: 350px){
       font-size: 2em;
    }
`;

export const StyledButton = styled(Button)`
  width: 50%;
  margin: 300px auto;
    &.hero{
      width:30%;
      position: relative;
      left: 200px;
      margin-top: 100px;
      box-shadow: 5px 10px 25px black;
      @media(max-width: 850px){
      position: inherit;
      width: 70%;
      margin-top: 350px;
    }
      @media(max-width: 350px){
        margin-top: 400px;
    }
  }   
  @media(max-width: 850px){
      margin: 100px auto;
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
