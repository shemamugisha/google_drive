import firebase from 'firebase/app';
import 'firebase/auth';

// const {
//   REACT_FIREBASE_API_KEY,
//   REACT_FIREBASE_AUTH_DOMAIN,
//   //   REACT_FIREBASE_DATABASE_URL,
//   REACT_FIREBASE_PROJECT_ID,
//   REACT_FIREBASE_STORAGE_BUCKET,
//   REACT_FIREBASE_MESSAGING_SENDER_ID,
//   REACT_FIREBASE_APP_ID,
//   //   REACT_FIREBASE_MEASUREMENT_ID,
// } = process.env;

console.log('apiiiiiiiiiiiiikeyyyyyyyy', process.env.REACT_FIREBASE_PROJECT_ID);

// const app = firebase.initializeApp({
//   apiKey: REACT_FIREBASE_API_KEY,
//   authDomain: REACT_FIREBASE_AUTH_DOMAIN,
//   //   databaseURL: REACT_FIREBASE_DATABASE_URL,
//   projectId: REACT_FIREBASE_PROJECT_ID,
//   storageBucket: REACT_FIREBASE_STORAGE_BUCKET,
//   messagingSenderId: REACT_FIREBASE_MESSAGING_SENDER_ID,
//   appId: REACT_FIREBASE_APP_ID,
//   //   measurementId: REACT_FIREBASE_MEASUREMENT_ID,
// });

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
