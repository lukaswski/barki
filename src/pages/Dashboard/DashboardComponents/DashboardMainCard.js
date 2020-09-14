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
          {userDataValue.name}
        </h4>
        <hr />
        <Row>
          <Col md={{ span: 4, offset: 0 }}>
            <DogInformation
              userDataValue={userDataValue}
            />
          </Col>
          <Col md={{ span: 3, offset: 0 }}>
            <Calendar />
          </Col>
          <Col>
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
