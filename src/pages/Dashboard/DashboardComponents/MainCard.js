import React from 'react';
import { Row, Col } from 'react-bootstrap';
import { BackgroundContainer } from '../../../styled/styledDashboard';
import DogInformation from './DogInformation';
import Calendar from './Calendar';
import Notification from './Notification';
import BarkHistory from './BarkHistory';

export default ({ userDataValue }) => {
  console.log(userDataValue);

  return (
    <>
      <BackgroundContainer>
        <h4>
          {userDataValue.userName}
        </h4>
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
    </>
  );
};
