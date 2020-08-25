import React, { useContext } from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
} from 'react-router-dom';
import {
  Nav, Navbar, Button, Form,
} from 'react-bootstrap';
import { LoginContext } from './contexts/LoginContext';
import { StyledLink } from './styled/styledComponents';
import Home from './pages/Home';
import About from './pages/About';
import Dashboard from './pages/Dashboard';
import ErrorPage from './pages/ErrorPage';
import Login from './pages/Login';
import Register from './pages/Register';

function Root() {
  const value = useContext(LoginContext);

  return (
    <Router>
      <Navbar expand="lg">
        <StyledLink to="/" className="logo">Barki Collar</StyledLink>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mr-auto">
            <StyledLink to="/about">O Barki</StyledLink>
            <StyledLink to="/dashboard">Moja obroża</StyledLink>
          </Nav>
          <Form inline>
            <Link to="/login"><Button variant="outline-success" className="mr-2">Login</Button></Link>
            <Link to="/register"><Button variant="outline-success" className="mr-2">Rejestracja</Button></Link>
          </Form>
        </Navbar.Collapse>
      </Navbar>
      {/* <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/about">O Barki</Link>
        </li>
        <li>
          <Link to="/dashboard">Moja obroża</Link>
        </li>
        <li>
          <Link to="/login">Logowanie</Link>
        </li>
        <li>
          <Link to='/register'>Rejestracja</Link>
        </li>
      </ul> */}

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
        <Route path="/register">
          <Register />
        </Route>
        <Route>
          <ErrorPage />
        </Route>
      </Switch>
    </Router>
  );
}

export default Root;
