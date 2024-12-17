import React, { useEffect, useState } from "react";
import AuthContext from "./AuthContext";
import {
  createUserWithEmailAndPassword,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signOut,
} from "firebase/auth";
import auth from "../firebase/firebase.config";
import axios from "axios";

const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  // register
  const createUser = (email, password) => {
    setLoading(true);
    return createUserWithEmailAndPassword(auth, email, password);
  };

  // login
  const loginUser = (email, password) => {
    setLoading(true);
    return signInWithEmailAndPassword(auth, email, password);
  };

  // logout
  const logOut = () => {
    setLoading(true);
    return signOut(auth);
  };
  // observation
  useEffect(() => {
    const unSubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
      console.log("user capture", currentUser?.email);

      // token create client side
      if (currentUser?.email) {
        const user = { email: currentUser.email };
        axios
          .post("https://job-portal-server-eta-six.vercel.app/jwt", user, {
            withCredentials: true,
          })
          .then((res) => {
            console.log("Login Token", res.data);
            setLoading(false);
          });
      } else {
        // token remove
        axios
          .post(
            "https://job-portal-server-eta-six.vercel.app/logout",
            {},
            { withCredentials: true }
          )
          .then((res) => {
            console.log("Logout Token", res.data);
            setLoading(false);
          });
      }
    });
    return () => {
      unSubscribe();
    };
  }, []);

  const authInfo = {
    user,
    loading,
    createUser,
    loginUser,
    logOut,
  };

  return (
    <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
  );
};

export default AuthProvider;
