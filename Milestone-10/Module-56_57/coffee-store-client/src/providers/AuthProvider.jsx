import React, { createContext, useState } from "react";
import { auth } from "../Firebase/firebase.init";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from "firebase/auth";

export const AuthContext = createContext(null);

const AuthProvider = ({ children }) => {
  const [user, setUser] = useState();
  const [loading, setLoading] = useState(true);

  /* register */
  const RegisterUser = (email, password) => {
    return createUserWithEmailAndPassword(auth, email, password);
  };

  /* login */
  const loginUser = (email, password) => {
    return signInWithEmailAndPassword(auth, email, password);
  };


  const authInfo = {
    user,
    loading,
    RegisterUser,
    loginUser,
  };

  return (
    <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
  );
};

export default AuthProvider;
