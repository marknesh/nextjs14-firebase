// Import the functions you need from the SDKs you need
import { config } from 'dotenv';
import { getApp, getApps, initializeApp } from 'firebase/app';
import { connectAuthEmulator, getAuth } from 'firebase/auth';
import { getFirestore, connectFirestoreEmulator } from 'firebase/firestore';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

config({});

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

if (process.env.NODE_ENV !== 'production') {
  connectAuthEmulator(auth, 'http://localhost:9099');
  connectFirestoreEmulator(db, '127.0.0.1', 8080);
}

export { auth, db };
