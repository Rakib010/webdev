// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAmsF_y1gAYqAan6RNXEeJqUvSBGAVOBc8",
  authDomain: "route-auth-combine.firebaseapp.com",
  projectId: "route-auth-combine",
  storageBucket: "route-auth-combine.firebasestorage.app",
  messagingSenderId: "613662544761",
  appId: "1:613662544761:web:0373675e756881eb4d15a8",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
