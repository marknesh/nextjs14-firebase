// Import the functions you need from the SDKs you need
import { getApp, getApps, initializeApp } from 'firebase/app';
import {
  GoogleAuthProvider,
  connectAuthEmulator,
  getAuth,
} from 'firebase/auth';
import { connectFirestoreEmulator, getFirestore } from 'firebase/firestore';
import { connectFunctionsEmulator, getFunctions } from 'firebase/functions';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: process.env.NEXT_PUBLIC_FIREBASE_APIKEY,
  authDomain: process.env.NEXT_PUBLIC_FIREBASE_AUTHDOMAIN,
  projectId: process.env.NEXT_PUBLIC_FIREBASE_PROJECTID,
  storageBucket: process.env.NEXT_PUBLIC_FIREBASE_STORAGEBUCKET,
  messagingSenderId: process.env.NEXT_PUBLIC_FIREBASE_MESSAGINGSENDERID,
  appId: process.env.NEXT_PUBLIC_FIREBASE_APPID,
};

const testFirebaseConfig = {
  apiKey: process.env.NEXT_PUBLIC_DEMO_FIREBASE_APIKEY,
  authDomain: process.env.NEXT_PUBLIC_DEMO_FIREBASE_AUTHDOMAIN,
  projectId: process.env.NEXT_PUBLIC_DEMO_FIREBASE_PROJECTID,
  storageBucket: process.env.NEXT_PUBLIC_DEMO_FIREBASE_STORAGEBUCKET,
  messagingSenderId: process.env.NEXT_PUBLIC_DEMO_FIREBASE_MESSAGINGSENDERID,
  appId: process.env.NEXT_PUBLIC_DEMO_FIREBASE_APPID,
};

// Initialize Firebase
const app =
  getApps().length > 0
    ? getApp()
    : initializeApp(
        process.env.NODE_ENV !== 'production'
          ? testFirebaseConfig
          : firebaseConfig
      );

const auth = getAuth(app);
const db = getFirestore(app);
const functions = getFunctions(app, 'europe-west1');
const googleProvider = new GoogleAuthProvider();

if (process.env.NODE_ENV !== 'production') {
  connectAuthEmulator(auth, 'http://127.0.0.1:9099');
  connectFirestoreEmulator(db, '127.0.0.1', 8080);
  connectFunctionsEmulator(functions, '127.0.0.1', 5001);
}

export { auth, db, googleProvider, app, functions};
