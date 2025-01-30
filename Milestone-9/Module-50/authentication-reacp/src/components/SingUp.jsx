import {
  createUserWithEmailAndPassword,
  GoogleAuthProvider,
  sendEmailVerification,
  signInWithPopup,
} from "firebase/auth";
import React, { useState } from "react";
import { auth } from "../Firebase/firebase.int";
import { Link } from "react-router-dom";
import { FaEye, FaEyeSlash } from "react-icons/fa";


const SingUp = () => {
  const [errorMessage, setErrorMessage] = useState("");
  const [success, setSuccess] = useState(false);
  const [showPassword, setShowPassword] = useState(false);

  const handleSingUp = (e) => {
    e.preventDefault();
    const email = e.target.email.value;
    const password = e.target.password.value;
    const name = e.target.name.value;
    const terms = e.target.terms.checked;
    console.log(name, email, password, terms);

    /* Reset error and status */
    setErrorMessage("");

    /* Reset success message: if first time wrong next time maybe true that's why again default value */
    setSuccess(false);

    /*CheckBox: if  */
    if (!terms) {
      setErrorMessage("Please accept our terms and condition");
      return;
    }

    //password at least 6 charter
    if (password.length < 6) {
      setErrorMessage("Password at least 6 character");
      return;
    }

    // RegExp using for password strong
    const passwordStrong =
      /^(?=.*[0-9])(?=.*[a-z])(?=.*[A-Z])(?=.*\W)(?!.* ).{6,}$/;

    if (!passwordStrong.test(password)) {
      setErrorMessage(
        "At least one uppercase, one lowercase, one number, one special character"
      );
      return;
    }

    // create user with email and password
    createUserWithEmailAndPassword(auth, email, password)
      .then((result) => {
        console.log(result);
        setSuccess(true);

        // after success crate user then create email verification email
        sendEmailVerification(auth.currentUser).then(() => {
          console.log("Verification email sent");
        });
      })
      .catch((error) => {
        console.log("Error", error);
        setErrorMessage(error.message);
        setSuccess(false);
      });
  };

  const handleEyeBtn = () => {
    setShowPassword(!showPassword);
  };

  return (
    <div>
      <div className="hero bg-base-200 min-h-screen">
        <div className="hero-content flex-col">
          <div className="text-center lg:text-left">
            <h1 className="text-3xl font-bold">Sing Up</h1>
          </div>
          <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
            <form onSubmit={handleSingUp} className="card-body">
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Name</span>
                </label>
                <input
                  type="text"
                  placeholder="name"
                  className="input input-bordered"
                  required
                  name="name"
                />
              </div>
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
              <div className="form-control relative">
                <label className="label">
                  <span className="label-text">Password</span>
                </label>
                <input
                  type={showPassword ? "text" : "password"}
                  placeholder="password"
                  className="input input-bordered"
                  required
                  name="password"
                />
                <button
                  onClick={handleEyeBtn}
                  className="btn btn-xs absolute top-12 right-2"
                >
                  {showPassword ? <FaEyeSlash /> : <FaEye />}
                </button>
              </div>
              <div className="form-control">
                <label className="label justify-start cursor-pointer">
                  <input type="checkbox" name="terms" className="checkbox" />
                  <span className="label-text ml-2">
                    Accept Our Terms And Condition
                  </span>
                </label>
              </div>
              <div className="form-control mt-2">
                <button className="btn btn-primary">Sing Up</button>
              </div>
            </form>

            {/* show error passage */}
            {errorMessage && (
              <p className="text-red-600 text-xs text-center font-bold">
                {errorMessage}
              </p>
            )}
            {success && (
              <p className="text-green-600 text-center">
                Sign up is Successful
              </p>
            )}

            {/* Link  */}
            <p className="p-4">
              Already have an account? please
              <Link to="/login">
                <span className="text-green-600 font-bold ml-2">Login</span>
              </Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SingUp;
