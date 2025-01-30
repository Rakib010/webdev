import { createContext, useEffect, useState } from "react";
import {
  createUserWithEmailAndPassword,
  GoogleAuthProvider,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
  updateProfile,
} from "firebase/auth";
import auth from "../../Firebase/firebase.config";

export const authContext = createContext();

const AuthProvider = ({ children }) => {
  const googleProvider = new GoogleAuthProvider();

  /* login information save korer jonno ey state use kora hocche */
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  /* Register email & password  */
  const handleRegister = (email, password) => {
    return createUserWithEmailAndPassword(auth, email, password);
    /* .then(res => signOut(auth) ) */
  };

  /* Login function */
  const handleLogin = (email, password) => {
    return signInWithEmailAndPassword(auth, email, password);
  };

  /* google login */
  const handleGoogleLogin = () => {
    return signInWithPopup(auth, googleProvider);
  };

  /* SignOut */
  const handleLogOut = () => {
    return signOut(auth);
  };

  /* observation state for login & register */
  useEffect(() => {
    const unSubscribe = onAuthStateChanged(auth, (currentUser) => {
      console.log(currentUser);

      /* jodi login information ba login thake  */
      if (currentUser) {
        setUser(currentUser);
      } else {
        setUser(null);
      }
      /* default true, jodi value pai thkn false hobe */
      setLoading(false);

      return () => {
        unSubscribe();
      };
    });
  }, []);

  /* Update profile  when login or register*/
  const manageProfile = (name, photo) => {
    updateProfile(auth.currentUser, {
      displayName: name,
      photoURL: photo,
    });
  };

  const authInfo = {
    handleRegister,
    handleLogin,
    handleGoogleLogin,
    handleLogOut,
    manageProfile,
    user,
    setUser,
    loading,
  };

  return (
    <authContext.Provider value={authInfo}>{children}</authContext.Provider>
  );
};

export default AuthProvider;
