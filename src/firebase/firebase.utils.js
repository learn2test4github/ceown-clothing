import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
  apiKey: 'AIzaSyArkRU2ZKextN70wnq614LxcziYJ0yJAEw',
  authDomain: 'crown-db-68486.firebaseapp.com',
  databaseURL: 'https://crown-db-68486.firebaseio.com',
  projectId: 'crown-db-68486',
  storageBucket: '',
  messagingSenderId: '95479722705',
  appId: '1:95479722705:web:d3177f670a75b5ab'
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
