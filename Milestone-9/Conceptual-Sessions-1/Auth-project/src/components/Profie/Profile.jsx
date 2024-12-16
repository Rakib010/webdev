import React, { useContext } from "react";
import { authContext } from "../../context/AuthProvider";
import { Navigate } from "react-router-dom";

const Profile = () => {
  const { user } = useContext(authContext);
  console.log(user);
/* 
  if (!user) {
    return <Navigate to="/login"></Navigate>;
  } */

  return <div>Hello Profile</div>;
};

export default Profile;
