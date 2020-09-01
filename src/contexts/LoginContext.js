import React, { createContext, useEffect, useState } from 'react';
import { auth, database } from '../firebase/firebaseConfig';

export const LoginContext = createContext();
export const LoginProvider = (props) => {
  const [user, setUser] = useState({});
  const [userData, setUserData] = useState({});

  const writeDatabase = (name, email, uid) => {
    database.ref(`users/${name} - ${uid}`).update({
      name,
      email,
      uid,
    });
  };

  const readDatabase = (name, uid) => {
    database.ref(`users/${name} - ${uid}`).on('value',
      (snapshot) => setUserData(snapshot.val()),
      (error) => console.log(`Error: ${error.code}`));
  };

  useEffect(() => {
    const unsubscribe = auth().onAuthStateChanged((data) => setUser({
      name: data.displayName,
      email: data.email,
      uid: data.uid,
    },
    writeDatabase(data.displayName, data.email, data.uid),
    readDatabase(data.displayName, data.uid)));
    return () => unsubscribe();
  }, []);

  return (
    <LoginContext.Provider value={{ user: [user, setUser], userData: [userData, setUserData] }}>
      {props.children}
    </LoginContext.Provider>
  );
};
