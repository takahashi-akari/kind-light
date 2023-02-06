import { Auth, getAuth } from '@firebase/auth';
import { Firestore, getFirestore } from '@firebase/firestore';
import { initializeApp } from 'firebase/app';


const firebaseConfig = {
  apiKey: process.env.REACT_APP_FIREBASE_APIKEY,
  authDomain: process.env.REACT_APP_FIREBASE_DOMAIN,
  databaseURL: process.env.REACT_APP_FIREBASE_DATABASE,
  projectId: process.env.REACT_APP_FIREBASE_PROJECT_ID,
  storageBucket: process.env.REACT_APP_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: process.env.REACT_APP_FIREBASE_SENDER_ID,
  appId: process.env.REACT_APP_FIREBASE_APP_ID,
};

let db: Firestore
let auth: Auth

const app = initializeApp(firebaseConfig)

db = getFirestore(app)
auth = getAuth(app)

export { db, auth }