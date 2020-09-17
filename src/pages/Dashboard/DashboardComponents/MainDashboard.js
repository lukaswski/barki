import React, { useState } from 'react';
import {
  Row, Col, Button, Fade,
} from 'react-bootstrap';
import { BackgroundContainer } from '../../../styled/styledDashboard';
import DogInformation from './DogInformation';
import Calendar from './Calendar';
import Notification from './Notification';
import BarkHistory from './BarkHistory';

export default ({ userDataValue }) => {
  const [fadeIn, setFadeIn] = useState(true);
  console.log(userDataValue);

  return (
    <>
      <Fade in={fadeIn} appear>
        <BackgroundContainer>
          <Row>
            <Col
              md={{ span: 5, offset: 0 }}
              sm={{ span: 4, offset: 0 }}
              xs={{ span: 5, offset: 0 }}>
              <h5>{userDataValue.userName}</h5>
              {' '}
            </Col>
            <Col
              md={{ span: 1, offset: 6 }}
              sm={{ span: 2, offset: 6 }}
              xs={{ span: 2, offset: 4 }}>
              <Button variant="outline-secondary">profil</Button>
            </Col>
          </Row>
          <hr />
          <Row>
            <Col md={{ span: 6, offset: 0 }} xs={{ order: 'last' }}>
              <DogInformation
                userDataValue={userDataValue}
              />
            </Col>
            <Col md={{ span: 6, offset: 0 }} xs={12} sm={12}>
              <Calendar />
            </Col>
          </Row>
          <Row>
            <Col>
              <hr />
              <Notification />
            </Col>
          </Row>
          <Row>
            <BarkHistory />
          </Row>
        </BackgroundContainer>
      </Fade>
    </>
  );
};
