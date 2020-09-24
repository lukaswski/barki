import React, { useContext, useState } from 'react';
import {
  // eslint-disable-next-line linebreak-style
  BrowserRouter as Router,
  Switch,
  Route,
} from 'react-router-dom';
import {
  Nav, Navbar, Button, Form,
} from 'react-bootstrap';
import firebase from 'firebase/app';
import { LoginContext } from './contexts/LoginContext';
import { StyledLink } from './styled/styledComponents';
import Home from './pages/Home';
import About from './pages/About';
import Dashboard from './pages/Dashboard/Dashboard';
import ErrorPage from './pages/ErrorPage';
import LoginPage from './pages/Login/LoginPage';
import Contact from './pages/Contact';
import NotLogged from './pages/NotLogged';
import Rules from './pages/Rules';
import Faq from './pages/Faq';

function Root() {
  const { user, userData } = useContext(LoginContext);
  const [userValue, setUserValue] = user;

  const [registerButton, setRegisterButton] = useState(false);
  const [expanded, setExpanded] = useState(false);
  const handleRegisterClick = () => (setRegisterButton(!registerButton));

  const handleLogout = () => (
    setUserValue({}),
    firebase.auth().signOut(),
    setRegisterButton(true)
  );
  return (
    <Router>
      <Navbar expand="lg" expanded={expanded}>
        <StyledLink to="/" className="logo" onClick={() => setExpanded(false)}>Barki collar</StyledLink>
        <Navbar.Toggle aria-controls="basic-navbar-nav" onClick={() => setExpanded(expanded ? false : 'expanded')} />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mr-auto">
            <StyledLink to="/about" onClick={() => setExpanded(false)}>O obroży</StyledLink>
            <StyledLink to="/contact" onClick={() => setExpanded(false)}>Kontakt</StyledLink>
          </Nav>
          <Form inline>
            <StyledLink to="/dashboard" onClick={() => setExpanded(false)}>Moja obroża</StyledLink>
          </Form>
          <StyledLink to="/login" onClick={() => setExpanded(false)}>
            {userValue.email ? <Button variant="outline-danger" className="mr-2" onClick={handleLogout}>Wyloguj się</Button> : (
              <Button variant="outline-success" className="mr-2" onClick={handleRegisterClick}>
                {registerButton ? 'Rejestracja' : 'Logowanie'}
              </Button>
            ) }
          </StyledLink>
        </Navbar.Collapse>
      </Navbar>

      <Switch>
        <Route exact strict path="/">
          <Home />
        </Route>
        <Route path="/about">
          <About />
        </Route>
        <Route path="/dashboard">
          {userValue.email ? <Dashboard /> : <NotLogged setRegisterButton={setRegisterButton} />}
        </Route>
        <Route path="/login">
          <LoginPage
            registerButton={registerButton}
          />
        </Route>
        <Route path="/contact">
          <Contact />
        </Route>
        <Route path="/rules">
          <Rules />
        </Route>
        <Route path="/faq">
          <Faq />
        </Route>
        <Route>
          <ErrorPage />
        </Route>
      </Switch>
    </Router>
  );
}

export default Root;
