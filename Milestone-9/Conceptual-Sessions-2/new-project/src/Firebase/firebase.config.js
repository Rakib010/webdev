// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBlEwLcg_h_Pu3JHew64Wf63VgSkIIt7sM",
  authDomain: "second-conceptul-project.firebaseapp.com",
  projectId: "second-conceptul-project",
  storageBucket: "second-conceptul-project.firebasestorage.app",
  messagingSenderId: "880845504674",
  appId: "1:880845504674:web:852c66a9c60ff6f09257fb",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export default auth;
