import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

// const firebaseConfig = {
//     apiKey: process.env.REACT_APP_FIREBASE_API_KEY,
//     authDomain: process.env.REACT_APP_FIREBASE_AUTH_DOMAIN,
//     projectId: process.env.REACT_APP_FIREBASE_PROJECT_ID,
//     storageBucket: process.env.REACT_APP_FIREBASE_STORAGE_BUCKET,
//     messagingSenderId: process.env.REACT_APP_MESSAGING_SENDER,
//     appId: process.env.REACT_APP_APP_ID,
//     measurementId : process.env.REACT_APP_MEASUREMENT_ID
//   };

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyAJTdYwOsh0UWDoZV043TxkSQffa5AYmJc",
    authDomain: "my-training-project-db.firebaseapp.com",
    projectId: "my-training-project-db",
    storageBucket: "my-training-project-db.appspot.com",
    messagingSenderId: "681680818587",
    appId: "1:681680818587:web:bdaa8ee2d3cb955256913e",
    measurementId: "G-6N4M1B02Q2"
  };

//   INITIALIZE FIREBASE
export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);