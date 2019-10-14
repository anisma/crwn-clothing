import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
  apiKey: "AIzaSyBXpncCXhr5M8bgLKqBhmF_j56QYXtCBcM",
  authDomain: "crwn-db-17633.firebaseapp.com",
  databaseURL: "https://crwn-db-17633.firebaseio.com",
  projectId: "crwn-db-17633",
  storageBucket: "crwn-db-17633.appspot.com",
  messagingSenderId: "563551622360",
  appId: "1:563551622360:web:f03204d6e130ec828e33ad",
  measurementId: "G-1LF9C33W7E"
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account'});
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;