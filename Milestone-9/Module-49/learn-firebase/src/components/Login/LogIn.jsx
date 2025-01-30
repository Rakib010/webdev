import {
  GithubAuthProvider,
  GoogleAuthProvider,
  signInWithPopup,
  signOut,
} from "firebase/auth";
import auth from "../../Firebase/Firebase.int";
import { useState } from "react";

const LogIn = () => {
  const [user, setUser] = useState(null);
  const googleProvider = new GoogleAuthProvider();
  const githubProvider = new GithubAuthProvider();

  const handleLogIn = () => {
    signInWithPopup(auth, googleProvider)
      .then((result) => {
        console.log(result.user);
        setUser(result.user);
      })
      .catch((error) => {
        console.log("error", error);
        setUser(null);
      });
  };

  const handleSingOut = () => {
    signOut(auth)
      .then(() => {
        console.log("sing out");
        setUser(null);
      })
      .catch((error) => console.log(error));
  };

  const handleGithubSignIn = () => {
    signInWithPopup(auth, githubProvider)
      .then((result) => {
        console.log(result);
        setUser(result.user);
      })
      .catch((error) => console.log("Error", error));
  };

  // if user exists ? sign out : sing in

  return (
    <div className="p-6">
      {/*   <button onClick={handleLogIn} className="btn">
        Login with Google
      </button>
      <button onClick={handleSingOut} className="btn ml-4">
        Sign Out
      </button> */}
      {user ? (
        <button onClick={handleSingOut} className="btn ml-4">
          Sign Out
        </button>
      ) : (
        <>
          <button onClick={handleLogIn} className="btn">
            Login with Google
          </button>
          <button onClick={handleGithubSignIn} className="btn ml-4">
            Login with Github
          </button>
        </>
      )}

      {user && (
        <div>
          <h1>{user.displayName}</h1>
          <p>{user.email}</p>
          <img src={user.photoURL} alt="" />
        </div>
      )}
    </div>
  );
};

export default LogIn;
