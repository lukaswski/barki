import * as firebase from 'firebase';
import 'firebase/auth';

const firebaseConfig = {
  apiKey: 'AIzaSyAIkMPv8ruSXOHYyyJdj4d6gNjoh466Nlo',
  authDomain: 'silent-collar.firebaseapp.com',
  databaseURL: 'https://silent-collar.firebaseio.com',
  projectId: 'silent-collar',
  storageBucket: 'silent-collar.appspot.com',
  messagingSenderId: '653030575422',
  appId: '1:653030575422:web:6c77d9ab6508cf9f01706f',
  measurementId: 'G-NYR90STTSD',
};

firebase.initializeApp(firebaseConfig);

export const FacebookProvider = new firebase.auth.FacebookAuthProvider();
export const GoogleProvider = new firebase.auth.GoogleAuthProvider();

export const authByProvider = (provider) => firebase.auth().signInWithPopup(provider);
export const { auth } = firebase;
