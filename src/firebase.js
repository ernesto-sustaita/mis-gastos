// Import the functions you need from the SDKs you need

import {initializeApp} from 'firebase/app';
import { getFirestore } from 'firebase/firestore';


// https://firebase.google.com/docs/web/setup#available-libraries


// Your web app's Firebase configuration

const firebaseConfig = {
  apiKey: "AIzaSyCrPmUmHNxPw9FUkFYPaJFTQeG4xPoqJFM",
  authDomain: "mis-gastos-1fb64.firebaseapp.com",
  projectId: "mis-gastos-1fb64",
  storageBucket: "mis-gastos-1fb64.appspot.com",
  messagingSenderId: "501421441297",
  appId: "1:501421441297:web:d01b953b20d20c1ab58cb0"
};


// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);