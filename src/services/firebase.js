import 'firebase/auth'
import 'firebase/firestore'
import 'firebase/functions'
import firebase from 'firebase/app'

const firebaseConfig = {
  apiKey: process.env.REACT_APP_API_KEY,
  authDomain: process.env.REACT_APP_AUTH_DOMAIN,
  projectId: process.env.REACT_APP_PROJECT_ID,
  storageBucket: process.env.REACT_APP_STORAGE_BUCKET,
  messagingSenderId: process.env.REACT_APP_MESSAGING_SENDER_ID,
  appId: process.env.REACT_APP_APP_ID,
  measurementId: process.env.MEASUREMENT_ID
};
firebase.initializeApp(firebaseConfig);
export const auth = firebase.auth();
export const functions = firebase.functions;
export const firestore = firebase.firestore();
export const tasksRef = auth.currentUser

export default firebase