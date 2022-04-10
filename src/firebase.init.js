// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth} from 'firebase/auth'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyD_UCHqNB_BTmB-JJPjpymYdc57sqWLaTs",
  authDomain: "ema-john-shopping-de429.firebaseapp.com",
  projectId: "ema-john-shopping-de429",
  storageBucket: "ema-john-shopping-de429.appspot.com",
  messagingSenderId: "1094469211889",
  appId: "1:1094469211889:web:8f08d5ad8806758f933b50"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

let auth = getAuth(app);

export default auth;