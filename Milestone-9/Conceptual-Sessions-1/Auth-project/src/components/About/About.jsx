import { useContext } from "react";
import { authContext } from "../../context/AuthProvider";
import { Navigate } from "react-router-dom";

const About = () => {
  const { user } = useContext(authContext);
  console.log(user);

  return (
    <div>
      <h1>Hello about page</h1>
    </div>
  );
};

export default About;
