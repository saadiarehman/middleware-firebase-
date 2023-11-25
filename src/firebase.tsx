// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth} from 'firebase/auth'

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAXOE_6F2UIGSdjvWBBqV1zJY9KL3VysDQ",
  authDomain: "auth-development1-584d9.firebaseapp.com",
  projectId: "auth-development1-584d9",
  storageBucket: "auth-development1-584d9.appspot.com",
  messagingSenderId: "640441938409",
  appId: "1:640441938409:web:d29d86959b9310842a5b78"
};


const app = initializeApp(firebaseConfig);
const auth =getAuth();


export {auth,app}