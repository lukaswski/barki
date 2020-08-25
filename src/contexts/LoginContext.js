import React, { createContext, useEffect, useState } from 'react';
import { auth } from '../firebase/firebaseConfig';

export const LoginContext = createContext();

export const LoginProvider = (props) => {
  const [user, setUser] = useState({
  });
  // data?.uid, data.displayName, data.email
  useEffect(() => {
    const unsubscribe = auth().onAuthStateChanged((data) => setUser({
      name: data.displayName,
      email: data.email,
      uid: data.uid,
    }));
    return () => unsubscribe();
  }, []);

  return (
    <LoginContext.Provider value={user}>
      {props.children}
    </LoginContext.Provider>
  );
};
