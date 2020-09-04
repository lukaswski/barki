import React, { useContext } from 'react';
import { LoginContext } from '../../contexts/LoginContext';
import FirstLogin from './FirstLogin';
import { DASHBOARD_CARD_CONTENT } from '../../utilities/textContent';

export default () => {
  const { userData } = useContext(LoginContext);
  const [ userDataValue, setUserDataValue ] = userData;
  console.log(userDataValue.city);

 const [basicInformation, dogInformation, CollaarInformation] = DASHBOARD_CARD_CONTENT;

  return (
    <>
      <FirstLogin 
        userUid={userDataValue.uid}
        userName={userDataValue.name}
      />
    </>
  );
};
