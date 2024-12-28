import React from "react";
import { Link, useRouteError } from "react-router-dom";

const ErrorMsg = () => {
  const error = useRouteError();
  return (
    <div className="flex flex-col items-center justify-center text-3xl text-center mt-40 gap-3 font-bold">
      <h2>Oops !!!!</h2>
      <p>{error.statusText || error.message}</p>
      {error.status === 404 && (
        <div>
          <h2>Page NoT Found</h2>
          <Link to="/">
            <button className="btn mt-8 border-2 border-purple-600">
              Go Home
            </button>
          </Link>
        </div>
      )}
    </div>
  );
};

export default ErrorMsg;
