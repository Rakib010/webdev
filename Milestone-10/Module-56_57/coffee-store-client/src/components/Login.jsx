import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../providers/AuthProvider";

const Login = () => {
  const { loginUser } = useContext(AuthContext);

  const handleLogin = (e) => {
    e.preventDefault();
    const form = e.target;
    const email = form.email.value;
    const password = form.password.value;
    //console.log(email, password);

    loginUser(email, password)
      .then((res) => {
        console.log(res.user);

        /* updated last log in time */
        const lastLoginAt = res.user?.metadata?.lastSignInTime;
        const loginInfo = { email, lastLoginAt };

        fetch(`https://coffee-store-server-rouge-iota.vercel.app/users`, {
          method: "PATCH",
          headers: { "content-type": "application/json" },
          body: JSON.stringify(loginInfo),
        })
          .then((res) => res.json())
          .then((data) => {
            // console.log(data);
          });
      })
      .catch((err) => console.log(err));
  };
  return (
    <div className="min-h-screen flex justify-center items-center">
      <div className="card bg-base-100 w-full max-w-lg shrink-0  rounded-none p-10">
        <h2 className="text-2xl font-semibold text-center">
          Login your account
        </h2>
        <form onSubmit={handleLogin} className="card-body">
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
              type="text"
              placeholder="password"
              className="input input-bordered"
              required
              name="password"
            />
            {/* {error.login && (
              <p className="text-sm  text-red-500 my-2">{error.login}</p>
            )} */}
            <label className="label">
              <a href="#" className="label-text-alt link link-hover">
                Forgot password?
              </a>
            </label>
          </div>
          <div className="form-control mt-6">
            <button className="btn btn-neutral rounded-none">Login</button>
          </div>
        </form>
        <p className="text-center font-semibold">
          Don't Have An Account?
          <Link to="/register">
            <span className="text-red-500">Register</span>
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Login;
