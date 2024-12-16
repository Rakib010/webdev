import {
  createUserWithEmailAndPassword,
  sendEmailVerification,
  updateProfile,
} from "firebase/auth";
import React, { useState } from "react";
import auth from "../firebase.int";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { Link } from "react-router-dom";

const RecapRegister = () => {
  const [error, setError] = useState("");
  const [success, setSuccess] = useState(false);
  const [showPassword, setShowPassword] = useState(false);

  const handleSingUp = (e) => {
    e.preventDefault();
    const email = e.target.email.value;
    const pass = e.target.password.value;
    const terms = e.target.terms.checked;
    const name = e.target.name.value;
    const photo = e.target.photo.value;
    console.log(email, pass, name, photo);

    // reset error and status
    setError("");
    // rest & again try
    setSuccess(false);

    // checkbox terms
    if (!terms) {
      setError("please accept our terms and conditions");
      return;
    }

    // password condition
    if (pass.length < 6) {
      setError("Password should be 6 characters or longer");
      return;
    }
    const passwordRegex =
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@.#$!%*?&^])[A-Za-z\d@.#$!%*?&]{6,}$/;

    if (!passwordRegex.test(pass)) {
      setError(
        "At least one uppercase, one lowercase, one number, one special character'"
      );
      return;
    }

    // create auth email & pass
    createUserWithEmailAndPassword(auth, email, pass)
      .then((result) => {
        console.log(result.user);
        setSuccess(true);

        //send verification email address
        sendEmailVerification(auth, currentUser).then(() => {
          console.log("verification email sent");

          // update Profile name and photo url
          const profile = {
            displayName: name,
            photoURL: photo
          }
          updateProfile(auth.currentUser.profile)
            .then(() => {
              console.log("user profile updated");
            })
            .catch((error) => console.log("user profile update error"));
        });
      })
      .catch((error) => {
        console.log(error);
        setError(error.message);
        setSuccess(false);
      });
  };

  return (
    <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl mx-auto mt-10">
      <h1 className="text-3xl text-center pt-2 font-bold">Sing Up Now</h1>
      <form onSubmit={handleSingUp} className="card-body">
        <div className="form-control">
          <label className="label">
            <span className="label-text">Name</span>
          </label>
          <input
            type="text"
            placeholder="name"
            name="name"
            className="input input-bordered"
            required
          />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Photo URL</span>
          </label>
          <input
            type="text"
            placeholder="photo"
            name="photo"
            className="input input-bordered"
            required
          />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Email</span>
          </label>
          <input
            type="email"
            placeholder="email"
            name="email"
            className="input input-bordered"
            required
          />
        </div>
        <div className="form-control relative">
          <label className="label">
            <span className="label-text">Password</span>
          </label>
          <input
            type={showPassword ? "text" : "password"}
            placeholder="password"
            name="password"
            className="input input-bordered"
            required
          />
          <button
            onClick={() => setShowPassword(!showPassword)}
            className="btn btn-xs absolute right-4 top-12"
          >
            {showPassword ? <FaEyeSlash /> : <FaEye />}
          </button>
          <label className="label">
            <a href="#" className="label-text-alt link link-hover">
              Forgot password?
            </a>
          </label>
        </div>
        <div className="form-control">
          <label className="label justify-start cursor-pointer">
            <input type="checkbox" name="terms" className="checkbox " />
            <span className="label-text ml-2">
              Accept Our Terms And Condition
            </span>
          </label>
        </div>
        <div className="form-control mt-6">
          <button className="btn btn-primary">Sing Up</button>
        </div>
      </form>
      {/*   error message */}
      {error && <p className="text-red-500 ">{error}</p>}
      {success && <p className="text-green-500">Sign up is Successful</p>}

      <p className="m-2">
        Already have an account? please
        <Link to="/login">
          <span className="text-green-400 font-bold ml-2">Login</span>
        </Link>
      </p>
    </div>
  );
};

export default RecapRegister;
