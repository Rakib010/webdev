import { createContext, useEffect, useState } from "react";
import auth from "../../Firebase/firebase.config";
import {
  createUserWithEmailAndPassword,
  GoogleAuthProvider,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
  updateProfile,
} from "firebase/auth";

export const authContext = createContext();

const AuthProvider = ({ children }) => {
  const [user, setUser] = useState();
  const [loading, setLoading] = useState(true);

  //Register
  const handleRegister = (email, password) => {
    return createUserWithEmailAndPassword(auth, email, password);
  };

  // login
  const handleLogin = (email, password) => {
    return signInWithEmailAndPassword(auth, email, password);
  };

  /*  google login */
  const googleProvider = new GoogleAuthProvider();
  const handleGoogleLogin = () => {
    return signInWithPopup(auth, googleProvider);
  };

  /* SignOut */
  const handleLogOut = () => {
    return signOut(auth);
  };

  // current user observer
  useEffect(() => {
    const unSubscribe = onAuthStateChanged(auth, (currentUser) => {
      console.log("currentUser", currentUser);
      setUser(currentUser);
      setLoading(false);

      return () => {
        unSubscribe;
      };
    });
  }, []);

  // use profile
  const userProfile = (name, photo) => {
    return updateProfile(auth.currentUser, {
      displayName: name,
      photoURL: photo,
    });
  };

  const authInfo = {
    handleRegister,
    handleLogin,
    handleGoogleLogin,
    handleLogOut,
    userProfile,
    user,
    loading,
    setLoading,
  };

  return (
    <authContext.Provider value={authInfo}>{children}</authContext.Provider>
  );
};

export default AuthProvider;
