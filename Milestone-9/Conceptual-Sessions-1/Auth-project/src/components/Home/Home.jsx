import { createContext, useContext } from "react";
import { authContext } from "../../context/AuthProvider";
import SignUp from "../SignUp/SignUp";
import { Link } from "react-router-dom";

const Home = () => {
  const { handleGoogle, handleGithub, handleTwitter, handleLogOut, user } =
    useContext(authContext);

  return (
    <div>
      <button className="btn m-4" onClick={handleGoogle}>
        Google Login
      </button>
      <button className="btn m-4" onClick={handleGithub}>
        Github Login
      </button>
      <button className="btn m-4" onClick={handleTwitter}>
        twitter Login
      </button>
      <button className="btn m-4" onClick={handleLogOut}>
        Log Out
      </button>
      <div className="p-4">
        {user?.displayName}
        {user?.email}
      </div>
    </div>
  );
};

export default Home;
