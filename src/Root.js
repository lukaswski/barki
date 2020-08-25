import React, { useContext } from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
} from 'react-router-dom';
import { LoginContext } from './contexts/LoginContext';
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
      <ul>
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
      </ul>

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
