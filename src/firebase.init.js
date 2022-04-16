// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth} from 'firebase/auth';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBeTFIlJfD_-s0Q2X6Y5xGTCAPIBBK9hTU",
  authDomain: "backpack-traveler.firebaseapp.com",
  projectId: "backpack-traveler",
  storageBucket: "backpack-traveler.appspot.com",
  messagingSenderId: "866870909982",
  appId: "1:866870909982:web:cf1c409d6362fe6b64a20f"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);



const auth = getAuth(app);

export default auth;

