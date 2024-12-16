import React, { useContext } from "react";
import { authContext } from "../../context/AuthProvider";
import { Navigate } from "react-router-dom";

const PrivateRoute = ({ children }) => {
  const { user, loading } = useContext(authContext);
  if (loading) {
    return <p>loading...</p>;
  }

  console.log(children);
  if (!user) {
    return <Navigate to="/login"></Navigate>;
  }
  return <div>{children}</div>;
};

export default PrivateRoute;
