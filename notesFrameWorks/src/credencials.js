// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAQUM2V62S6ugwz7iKIx2bk1TyQrhF25DM",
  authDomain: "login-d4dc2.firebaseapp.com",
  projectId: "login-d4dc2",
  storageBucket: "login-d4dc2.appspot.com",
  messagingSenderId: "879787805803",
  appId: "1:879787805803:web:767cbdba529618c68ff52e"
};

// Initialize Firebase
const appFireBase = initializeApp(firebaseConfig);

export default appFireBase;