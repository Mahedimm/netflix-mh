// Import the functions you need from the SDKs you need
import { getApp, getApps, initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCsJsiFYvLPG3LTY1Uw5UwtUfTtEvB58Dg",
  authDomain: "mh-netflix.firebaseapp.com",
  projectId: "mh-netflix",
  storageBucket: "mh-netflix.appspot.com",
  messagingSenderId: "782472756762",
  appId: "1:782472756762:web:d382f230819a4bbb485ba3",
};

// Initialize Firebase
// Initialize Firebase
const app = !getApps().length ? initializeApp(firebaseConfig) : getApp();
const db = getFirestore();
const auth = getAuth();

export default app;
export { auth, db };
