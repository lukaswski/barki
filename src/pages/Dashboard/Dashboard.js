import React, { useContext } from 'react';
import { Fade } from 'react-bootstrap';
import { LoginContext } from '../../contexts/LoginContext';
import FirstLogin from './FirstLogin';
import { DASHBOARD_CARD_CONTENT } from '../../utilities/textContent';
import { BarkProvider } from '../../contexts/BarkContext';
import DashboardMainCard from './DashboardComponents/MainDashboard';

export default () => {
  const { userData } = useContext(LoginContext);
  const [userDataValue, setUserDataValue] = userData;
  const [basicInformation, dogInformation, CollaarInformation] = DASHBOARD_CARD_CONTENT;
  const {
    userName, dogName, serialNumber, uid, name, firstLogin,
  } = userDataValue;

  const firstLoginCards = [];
  const displayFirstLoginCards = (arg, arg2) => {
    firstLogin === true & arg2 === undefined && firstLoginCards.push(arg);
  };

  displayFirstLoginCards(basicInformation, userName);
  displayFirstLoginCards(dogInformation, dogName);
  displayFirstLoginCards(CollaarInformation, serialNumber);

  return (
    <Fade in appear>
      <BarkProvider>
        {firstLoginCards.length > 0
          ? (
            <FirstLogin
              userUid={uid}
              userName={name}
              firstLoginCards={firstLoginCards}
            />
          )
          : (
            <DashboardMainCard
              userDataValue={userDataValue}
            />
          )}
      </BarkProvider>
    </Fade>
  );
};
