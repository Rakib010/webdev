// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

// DANGER : Do not share config publicly

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyC98lezNBHYw7dga4-E2V22rpwunEnKBic",
  authDomain: "learn-authentication-e128d.firebaseapp.com",
  projectId: "learn-authentication-e128d",
  storageBucket: "learn-authentication-e128d.firebasestorage.app",
  messagingSenderId: "966272380102",
  appId: "1:966272380102:web:39a116911c46afea71fbc7",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app);

export default auth;
