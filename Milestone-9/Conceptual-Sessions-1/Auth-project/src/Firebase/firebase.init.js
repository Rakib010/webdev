// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCGNFtSo_8MMa7ryw_LcCeIzgveRiFUc50",
  authDomain: "first-conceptual-project.firebaseapp.com",
  projectId: "first-conceptual-project",
  storageBucket: "first-conceptual-project.firebasestorage.app",
  messagingSenderId: "858820817746",
  appId: "1:858820817746:web:15822d18b970a84dbfc08b",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export default auth;
