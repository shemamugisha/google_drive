import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/firestore';

const app = firebase.initializeApp({
  apiKey: 'AIzaSyDda_lIhqK2G8XiQCeQJShUoZDp5jHrGEw',
  authDomain: 'drive-clone-8fc45.firebaseapp.com',
  projectId: 'drive-clone-8fc45',
  storageBucket: 'drive-clone-8fc45.appspot.com',
  messagingSenderId: '297017367031',
  appId: '1:297017367031:web:c526af2f7cb3e8402ff6f2',
});

const firestore = app.firestore();
export const database = {
  folders: firestore.collection('folders'),
  files: firestore.collection('files'),
  getCurrentTimeStamp: firebase.firestore.FieldValue.serverTimestamp,
};

export const auth = app.auth();
export default app;
