import React, { useContext, useState } from 'react';
import {
  // eslint-disable-next-line linebreak-style
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
} from 'react-router-dom';
import {
  Nav, Navbar, Button, Form,
} from 'react-bootstrap';
import firebase from 'firebase/app';
import { LoginContext } from './contexts/LoginContext';
import { StyledLink } from './styled/styledComponents';
import Home from './pages/Home';
import About from './pages/About';
import Dashboard from './pages/Dashboard';
import ErrorPage from './pages/ErrorPage';
import LoginPage from './pages/Login/LoginPage';
import Contact from './pages/Contact';
import NotLogged from './pages/NotLogged';
import Rules from './pages/Rules';

function Root() {
  const [value, setValue] = useContext(LoginContext);
  const [registerButton, setRegisterButton] = useState(false);
  const handleRegisterClick = () => setRegisterButton(!registerButton);
  const handleLogout = () => (
    setValue({}),
    firebase.auth().signOut()
  );

  return (
    <Router>
      <Navbar expand="lg">
        <StyledLink to="/" className="logo">Barki Collar</StyledLink>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mr-auto">
            <StyledLink to="/about">O Barki</StyledLink>
            <StyledLink to="/contact">Kontakt</StyledLink>
          </Nav>
          <Form inline>
            <StyledLink to="/dashboard">Moja obroża</StyledLink>
            <Link to="/login">
              {value.email ? <Button variant="outline-danger" className="mr-2" onClick={handleLogout}>Wyloguj się</Button> : (
                <Button variant="outline-success" className="mr-2" onClick={handleRegisterClick}>
                  {registerButton ? 'Rejestracja' : 'Logowanie'}
                </Button>
              ) }
            </Link>
          </Form>
        </Navbar.Collapse>
      </Navbar>

      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route path="/about">
          <About />
        </Route>
        <Route path="/dashboard">
          {value.email ? <Dashboard /> : <NotLogged />}
        </Route>
        <Route path="/login">
          <LoginPage
            registerButton={registerButton}
          />
        </Route>
        <Route path="/contact">
          <Contact />
        </Route>
        <Route>
          <Rules path="/rules" />
        </Route>
        <Route>
          <ErrorPage />
        </Route>
      </Switch>
    </Router>
  );
}

export default Root;
