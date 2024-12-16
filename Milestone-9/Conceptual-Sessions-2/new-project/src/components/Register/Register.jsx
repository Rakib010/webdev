import React, { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { authContext } from "../AuthProvider/AuthProvider";

const Register = () => {
  const { handleRegister, manageProfile } = useContext(authContext);
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    const form = e.target;
    const name = form.name.value;
    const photo = form.photo.value;
    const email = form.email.value;
    const password = form.password.value;
    const conPassword = form.conPassword.value;
    console.log(name, photo, email, password, conPassword);

    /* reset error before again login */
    setError("");

    /* password length must be 6 characters */
    if (password.length < 6) {
      setError("password must contain at least 6 characters");
      return;
    }

    /* password & conPassword must be same  */
    if (password !== conPassword) {
      setError("Password didn't match");
      return;
    }

    /* must be uppercase & lowercase latter keep in the password (password condition)  */
    if (!/[a-z]/.test(password)) {
      setError("Password must contain at least one lowercase letter");
      return;
    }
    if (!/[A-Z]/.test(password)) {
      setError("Password must contain at least one upperCase letter");
      return;
    }

    handleRegister(email, password)
      /* update profile  */
      .then((res) => {
        manageProfile(name, photo);
      })
      .then(() => {
        alert('"Registration successful! Redirecting to home page..."');
        navigate("/");
      })
      .catch((err) => setError(err.message));
  };

  return (
    <div>
      <div className="min-h-screen flex justify-center items-center">
        <div className="card bg-base-100 w-full max-w-lg shrink-0  rounded-none p-10">
          <h2 className="text-2xl font-semibold text-center">
            Register your account
          </h2>
          <form onSubmit={handleSubmit} className="card-body">
            {/* name */}
            <div className="form-control">
              <label className="label">
                <span className="label-text">Your Name</span>
              </label>
              <input
                type="text"
                placeholder="name"
                className="input input-bordered"
                required
                name="name"
              />
            </div>

            {/* name error  */}
            {/* {error.name && <p className="text-xs text-red-500">{error.name}</p>} */}

            {/* photo url */}
            <div className="form-control">
              <label className="label">
                <span className="label-text">Photo URL</span>
              </label>
              <input
                type="text"
                placeholder="photo url"
                className="input input-bordered"
                required
                name="photo"
              />
            </div>
            {/* Email input */}
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
            {/* password */}
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
            </div>
            {/* confirm password */}
            <div className="form-control">
              <label className="label">
                <span className="label-text">Confirm Password</span>
              </label>
              <input
                type="text"
                placeholder="password"
                className="input input-bordered"
                required
                name="conPassword"
              />
            </div>
            <div className="form-control mt-6">
              <button className="btn btn-neutral rounded-none">Register</button>
            </div>
          </form>

          {/* jodi error thake  */}
          {error && (
            <p className="text-center text-xs text-red-500 mb-4">{error}</p>
          )}

          <p className="text-center font-semibold">
            Already Have An Account?
            <Link to="/login">
              <span className="text-red-500">Login</span>
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Register;
