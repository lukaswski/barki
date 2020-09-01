import React, { useContext } from 'react';
import { LoginContext } from '../../contexts/LoginContext';
import FirstLogin from './FirstLogin';

export default () => {
  const { userData } = useContext(LoginContext);

  const [ userDataValue, setUserDataValue ] = userData;
  console.log(userDataValue.name);
  return (
    <>
      <FirstLogin 
      userUid={userDataValue.uid}
      userName={userDataValue.name}
      />
    </>
  );
};
