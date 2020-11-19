import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/database';

const firebaseConfig = {
  apiKey: process.env.REACT_APP_API_KEY,
  authDomain: 'silent-collar.firebaseapp.com',
  databaseURL: 'https://silent-collar.firebaseio.com',
  projectId: 'silent-collar',
  storageBucket: 'silent-collar.appspot.com',
  messagingSenderId: '653030575422',
  appId: '1:653030575422:web:6c77d9ab6508cf9f01706f',
  measurementId: 'G-NYR90STTSD',
};

// Config
firebase.initializeApp(firebaseConfig);

// Database
export const database = firebase.database();

// Auth
export const { auth } = firebase;
export const facebookProvider = new firebase.auth.FacebookAuthProvider();
export const googleProvider = new firebase.auth.GoogleAuthProvider();

export const authByProvider = (provider) => firebase.auth().signInWithPopup(provider);
export const createUserByPassword = (email, password) => (
  firebase.auth().createUserWithEmailAndPassword(email, password)
);
export const authByPassword = (email, password) => (
  firebase.auth().signInWithEmailAndPassword(email, password)
);
export const logout = () => firebase.auth().signOut();
export const passwordReset = (email) => firebase.auth().sendPasswordResetEmail(email);
