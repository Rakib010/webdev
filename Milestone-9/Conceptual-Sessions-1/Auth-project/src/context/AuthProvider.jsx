import React, { createContext, useEffect, useState } from "react";
import {
  signInWithPopup,
  GoogleAuthProvider,
  GithubAuthProvider,
  TwitterAuthProvider,
  onAuthStateChanged,
  signOut,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from "firebase/auth";
import auth from "../Firebase/firebase.init";

export const authContext = createContext();

const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  const googleProvider = new GoogleAuthProvider();
  const githubProvider = new GithubAuthProvider();
  const twitterProvider = new TwitterAuthProvider();

  const handleGoogle = () => {
    setLoading(true);
    signInWithPopup(auth, googleProvider)
      .then((result) => setUser(result.user))
      .catch((error) => console.log(error.message));
  };

  const handleGithub = () => {
    setLoading(true);
    signInWithPopup(auth, githubProvider)
      .then((result) => setUser(result.user))
      .catch((error) => console.log(error.message));
  };
  const handleTwitter = () => {
    setLoading(true);
    signInWithPopup(auth, twitterProvider)
      .then((result) => setUser(result.user))
      .catch((error) => console.log(error.message));
  };

  const handleLogOut = () => {
    setLoading(true);
    signOut(auth)
      .then((result) => console.log(result.user))
      .catch((error) => console.log(error.message));
  };

  // use
  useEffect(() => {
    console.log("User state", user);
  }, [user]);

  useEffect(() => {
    const unSubscribe = onAuthStateChanged(auth, (currentUser) => {
      if (currentUser) {
        setUser(currentUser);
      } else {
        setUser(null);
      }
      setLoading(false);

      /*   if (user) {
        // User is signed in, see docs for a list of available properties
        // https://firebase.google.com/docs/reference/js/auth.user
        const uid = user.uid;
        // ...
      } else {
        // User is signed out
        // ...
      } */
    });
    return () => {
      unSubscribe();
    };
  }, []);

  /* Email  */
  const handleSignUp = (email, password) => {
    setLoading(true);
    createUserWithEmailAndPassword(auth, email, password)
      .then((result) => console.log(result.user))
      .catch((error) => console.log(error.message));
  };
  const handleSignIn = (email, password) => {
    setLoading(true);
    signInWithEmailAndPassword(auth, email, password)
      .then((result) => console.log(result.user))
      .catch((error) => console.log(error.message));
  };

  const authInfo = {
    handleTwitter,
    handleGithub,
    handleGoogle,
    handleLogOut,
    user,
    handleSignUp,
    handleSignIn,
    loading,
  };
  return (
    <div>
      <authContext.Provider value={authInfo}>{children}</authContext.Provider>
    </div>
  );
};

export default AuthProvider;
