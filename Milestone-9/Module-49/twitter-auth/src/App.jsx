import { GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import auth from "./code.int";
import { useState } from "react";

const App = () => {
  const [user, setUser] = useState();

  const provider = new GoogleAuthProvider();

  const handleLogIn = () => {
    signInWithPopup(auth, provider)
      .then((result) => {
        console.log(result);
        setUser(result.user);
      })
      .catch((error) => {
        console.log("Error", error);
        setUser(null);
      });
  };

  return (
    <div>
      <button onClick={handleLogIn}>LogIn</button>
      <button>LogOut</button>
      {user && (
        <div>
          <p>{user.displayName}</p>
        </div>
      )}
    </div>
  );
};

export default App;
