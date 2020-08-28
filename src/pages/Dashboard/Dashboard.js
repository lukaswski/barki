import React, { useContext } from 'react';
import { LoginContext } from '../../contexts/LoginContext';
import FirstLogin from './FirstLogin';

export default () => {
  const { userData } = useContext(LoginContext);
  const [userDataValue] = userData;
  return (
    <FirstLogin />
  );
};
