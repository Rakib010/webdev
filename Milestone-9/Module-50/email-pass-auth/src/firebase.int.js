// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyD2hagcGS9rvJTWhUO6XN-KggjqpvDxjWc",
  authDomain: "email-password-auth-3908d.firebaseapp.com",
  projectId: "email-password-auth-3908d",
  storageBucket: "email-password-auth-3908d.firebasestorage.app",
  messagingSenderId: "89546672039",
  appId: "1:89546672039:web:0da3aac326ead51ba15882",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export default auth;
