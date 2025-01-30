// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBv0Q8tW5RFsrx6l-U75Yilo7chv3LPNL8",
  authDomain: "practice-auth-5378e.firebaseapp.com",
  projectId: "practice-auth-5378e",
  storageBucket: "practice-auth-5378e.firebasestorage.app",
  messagingSenderId: "762112087187",
  appId: "1:762112087187:web:a1f021a984390e41bbe966",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
