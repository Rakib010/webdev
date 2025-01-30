import { GoogleAuthProvider, signInWithPopup, signOut } from "firebase/auth";
import { useState } from "react";
import auth from "./Firebase/Firebase.init";

const App = () => {
  const [user, setUser] = useState(null);
  const provider = new GoogleAuthProvider();

  const handleSingIn = () => {
    signInWithPopup(auth, provider)
      .then((result) => {
        console.log(result);
        setUser(result.user);
      })
      .catch((error) => {
        console.log("error", error);
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

  return (
    <div className="p-6">
      <button onClick={handleSingIn} className="btn mr-4">
        Login
      </button>
      {user && (
        <div>
          <h3>{user.displayName}</h3>
          <p>{user.email}</p>
        </div>
      )}
      <button onClick={handleSingOut} className="btn">
        Logout
      </button>
    </div>
  );
};

export default App;
