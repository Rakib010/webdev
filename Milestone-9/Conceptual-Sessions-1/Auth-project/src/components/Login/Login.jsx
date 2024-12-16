import React, { useContext } from "react";
import { authContext } from "../../context/AuthProvider";
import { Link } from "react-router-dom";

const Login = () => {
  const { handleSignIn } = useContext(authContext);

  const handleSubmit = (e) => {
    e.preventDefault();
    const email = e.target.email.value;
    const password = e.target.password.value;
    /* console.log(email, password, conPassword); */

    handleSignIn(email, password);
  };
  return (
    <div>
      <div className="hero-content flex-col">
        <div className="text-center lg:text-left">
          <h1 className="text-5xl font-bold">Log In</h1>
        </div>
        <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
          <form onSubmit={handleSubmit} className="card-body">
            <div className="form-control">
              <label className="label">
                <span className="label-text">Email</span>
              </label>
              <input
                type="email"
                placeholder="email"
                className="input input-bordered"
                required
                name="email"
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Password</span>
              </label>
              <input
                type="password"
                placeholder="password"
                className="input input-bordered"
                required
                name="password"
              />
            </div>
            <div className="form-control mt-6">
              <button className="btn btn-primary">login</button>
            </div>
          </form>
          <Link className="text-center my-4 font-bold" to="/signup">
            Sign Up
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Login;
