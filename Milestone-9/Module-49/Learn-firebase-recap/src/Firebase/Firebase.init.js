// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDaK3ZjF-Ee8-gXLfS7jQob3v-NrqyQbQ4",
  authDomain: "learn-firebase0.firebaseapp.com",
  projectId: "learn-firebase0",
  storageBucket: "learn-firebase0.firebasestorage.app",
  messagingSenderId: "1008144973944",
  appId: "1:1008144973944:web:4de625334723ccb2e42d8d",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export default auth;
