import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const firebaseConfig = {
  apiKey: 'AIzaSyDxwOrUfM81DjMasCaXzYBflSjAmT99e5I',
  authDomain: 'shop-db-22bd1.firebaseapp.com',
  databaseURL: 'https://shop-db-22bd1.firebaseio.com',
  projectId: 'shop-db-22bd1',
  storageBucket: 'shop-db-22bd1.appspot.com',
  messagingSenderId: '740535332276',
  appId: '1:740535332276:web:3c203d5171814fcd3756e1',
  measurementId: 'G-FVGYW39MS4',
};

firebase.initializeApp(firebaseConfig);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
