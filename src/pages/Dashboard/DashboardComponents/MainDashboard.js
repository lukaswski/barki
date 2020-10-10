import React from 'react';
import {
  Row, Col, Button, Fade, Jumbotron } from 'react-bootstrap';
import {
  useRouteMatch, Link, Route, Switch, useLocation,
} from 'react-router-dom';
import { BackgroundContainer } from '../../../styled/styledDashboard';
import DogInformation from './DogInformation';
import Calendar from './Calendar';
import BarkHistory from './BarkHistory';
import DogProfil from './nestedComponents/DogProfil';
import AllHistory from './nestedComponents/AllHistory';
import UserProfile from './nestedComponents/UserProfile';

export default ({ userDataValue }) => {
  const { path, url } = useRouteMatch();
  return (
    <>
      <Fade in appear>
        <BackgroundContainer>
          {useLocation().pathname !== url
            && (
            <Col md={{ span: 2, offset: 10 }} xs={{ span: 2, offset: 9 }}>
              <Link to={`${url}`}>
                <Button variant="outline-primary">Powrót</Button>
              </Link>
            </Col>
            )}
          <Switch>
            <Route path={`${path}/user-profile`}>
              <UserProfile 
                userDataValue={userDataValue}
                />
            </Route>
            <Route path={`${path}/dog-profile`}>
              <DogProfil
                userDataValue={userDataValue}
              />
            </Route>
            <Route path={`${path}/all-history`}>
              <AllHistory 
                userDataValue={userDataValue}
                />
            </Route>
            <Route exact path={path}>
              <Row>
                <Col
                  md={{ span: 5, offset: 0 }}
                  sm={{ span: 4, offset: 0 }}
                  xs={{ span: 5, offset: 0 }}
                >
                  <h5>{userDataValue.userName}</h5>
                  {' '}
                </Col>
                <Col
                  md={{ span: 1, offset: 6 }}
                  sm={{ span: 2, offset: 6 }}
                  xs={{ span: 2, offset: 4 }}
                >
                  <Link to={`${url}/user-profile`}><Button variant="outline-secondary">profil</Button></Link>
                </Col>
              </Row>
              <hr />
              <Row>
                <Col md={{ span: 6, offset: 0 }} xs={{ order: 'last' }}>
                  <DogInformation
                    userDataValue={userDataValue}
                    url={url}
                  />
                </Col>
                <Col md={{ span: 6, offset: 0 }} xs={12} sm={12}>
                  <Calendar />
                </Col>
              </Row>
              <Row>
                <BarkHistory
                  url={url}
                />
              </Row>
            </Route>
          </Switch>
              <Jumbotron fluid>footer</Jumbotron>
        </BackgroundContainer>
      </Fade>
    </>
  );
};
