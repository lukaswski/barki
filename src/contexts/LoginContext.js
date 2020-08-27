import React, { createContext, useEffect, useState } from 'react';
import { auth } from '../firebase/firebaseConfig';

export const LoginContext = createContext();

export const LoginProvider = (props) => {
  const [user, setUser] = useState({
  });

  useEffect(() => {
    const unsubscribe = auth().onAuthStateChanged((data) => setUser({
      name: data.displayName,
      email: data.email,
      uid: data.uid,
    }, console.log(data)));
    return () => unsubscribe();
  }, []);

  return (
    <LoginContext.Provider value={[user, setUser]}>
      {props.children}
    </LoginContext.Provider>
  );
};
