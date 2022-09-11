// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

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

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app)