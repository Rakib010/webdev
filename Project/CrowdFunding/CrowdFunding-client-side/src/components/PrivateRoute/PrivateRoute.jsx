import React, { useContext } from "react";
import { authContext } from "../AuthProvider.jsx/AuthProvider";
import { Navigate } from "react-router-dom";

const PrivateRoute = ({ children }) => {
  const { user, loading } = useContext(authContext);
  if (loading) {
    return (
      <div className="flex justify-center items-center my-10">
        <span className="loading loading-spinner text-success"></span>
      </div>
    );
  }
  if (!user) {
    return (
      <Navigate
        to="/login"
        state={{ from: location.pathname }}
        replace
      ></Navigate>
    );
  }

  return children;
};

export default PrivateRoute;
