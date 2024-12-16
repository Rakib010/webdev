// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDcbx54Nvu5xiI5NUS1qsWcZ6QqPKzJPVo",
  authDomain: "coffee-store-f5e8e.firebaseapp.com",
  projectId: "coffee-store-f5e8e",
  storageBucket: "coffee-store-f5e8e.firebasestorage.app",
  messagingSenderId: "1021093190675",
  appId: "1:1021093190675:web:3764a9e692598668ff33e6"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth  = getAuth(app)
