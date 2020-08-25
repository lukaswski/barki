import React from 'react';
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
import { StyledLink } from './styled/styledComponents';
import Home from './pages/Home';
import About from './pages/About';
import Dashboard from './pages/Dashboard';
import ErrorPage from './pages/ErrorPage';
import Login from './pages/Login';
import Contact from './pages/Contact';

function Root() {
  return (
    <Router>
      <Navbar expand="lg">
        <StyledLink to="/" className="logo">Barki Collar</StyledLink>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mr-auto">
            <StyledLink to="/about">O Barki</StyledLink>
            <StyledLink to="/dashboard">Moja obroża</StyledLink>
            <StyledLink to="/contact">Kontakt</StyledLink>
          </Nav>
          <Form inline>
            <Link to="/login"><Button variant="outline-success" className="mr-2">Login</Button></Link>
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
          <Dashboard />
        </Route>
        <Route path="/login">
          <Login />
        </Route>
        <Route path="/contact">
          <Contact />
        </Route>
        <Route>
          <ErrorPage />
        </Route>
      </Switch>
    </Router>
  );
}

export default Root;
