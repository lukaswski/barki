import React, { useContext } from 'react';
import {
  Row, Col, Button, Fade, Spinner, Badge,
} from 'react-bootstrap';
import {
  useRouteMatch, Link, Route, Switch, useLocation,
} from 'react-router-dom';
import { BackgroundContainer } from '../../../styled/styledDashboard';
import { StyledAlertHistory } from '../../../styled/styledHisory';
import DogInformation from './DogInformation';
import { BarkContext } from '../../../contexts/BarkContext';
import Calendar from './Calendar';
import BarkHistory from './BarkHistory';
import DogProfil from './nestedComponents/DogProfil';
import AllHistory from './nestedComponents/AllHistory';
import UserProfile from './nestedComponents/UserProfile';
import { Styledtext } from '../../../styled/styledComponents';

export default ({ userDataValue, userDataValue: { barking } }) => {
  const [bark, setBark] = useContext(BarkContext);
  const { path, url } = useRouteMatch();

  const allBarks = barking && Object.values(barking)
    .map((singleBark) => new Date(singleBark).toJSON())
    .filter((singleDate) => singleDate.slice(0, 10) === bark)
    .sort()
    .reverse()
    .map((barkTime) => (
      <StyledAlertHistory key={barkTime} variant="warning">
        Wykryto szczekanie o godzinie:
        {' '}
        <Badge variant="warning">{new Date(barkTime).toJSON().slice(11, 16)}</Badge>
      </StyledAlertHistory>
    ));

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
                barking={barking}
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
                  {userDataValue.userName ? (
                    <div>
                      <h5>
                        {userDataValue.userName}
                      </h5>
                      <Styledtext onClick={() => navigator.clipboard.writeText(userDataValue.uid)}>
                        {userDataValue.uid}
                      </Styledtext>
                    </div>
                  ) : <Spinner animation="border" variant="info" />}
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
                <Col md={{ span: 6, offset: 0 }}>
                  <DogInformation
                    userDataValue={userDataValue}
                    url={url}
                  />
                </Col>
                <Col md={{ span: 6, offset: 0 }} xs={12} sm={12}>
                  <Calendar
                    allBarks={allBarks}
                  />
                </Col>
              </Row>
              <Row md={{ order: 'first' }}>
                <BarkHistory
                  allBarks={allBarks}
                  url={url}
                  bark={bark}
                  barking={barking}
                />
              </Row>
            </Route>
          </Switch>
        </BackgroundContainer>
      </Fade>
    </>
  );
};
