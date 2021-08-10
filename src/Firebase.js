import firebase from 'firebase/app';
import 'firebase/auth';

const app = firebase.initializeApp({
  apiKey: 'AIzaSyDda_lIhqK2G8XiQCeQJShUoZDp5jHrGEw',
  authDomain: 'drive-clone-8fc45.firebaseapp.com',
  projectId: 'drive-clone-8fc45',
  storageBucket: 'drive-clone-8fc45.appspot.com',
  messagingSenderId: '297017367031',
  appId: '1:297017367031:web:c526af2f7cb3e8402ff6f2',
});

export const auth = app.auth();
export default app;
