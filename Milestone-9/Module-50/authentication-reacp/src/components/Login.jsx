import {
  GithubAuthProvider,
  GoogleAuthProvider,
  sendPasswordResetEmail,
  signInWithEmailAndPassword,
  signInWithPopup,
} from "firebase/auth";
import React, { useRef, useState } from "react";
import { Link } from "react-router-dom";
import { auth } from "../Firebase/firebase.int";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { IoLogoGoogle, IoLogoGithub } from "react-icons/io";

const googleProvide = new GoogleAuthProvider();
const githubProvider = new GithubAuthProvider();

const Login = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [success, setSuccess] = useState(false);
  const [loginError, setLoginError] = useState("");

  const emailRef = useRef();

  const handleLogin = (e) => {
    e.preventDefault();
    const email = e.target.email.value;
    const password = e.target.password.value;
    console.log(email, password);

    /*reset success value */
    setSuccess(false);

    /* error message reset */
    setLoginError("");

    // user login
    signInWithEmailAndPassword(auth, email, password)
      .then((result) => {
        console.log(result.user);

        // if email verification successfully accept then you can use this application
        if (!result.user.emailVerified) {
          setLoginError("Please verify your email address");
        } else {
          setSuccess(true);
        }
      })
      .catch((error) => {
        console.log("Error", error.message);
        setSuccess(false);
        setLoginError(error.message);
      });
  };

  const handleEyeBtn = () => {
    setShowPassword(!showPassword);
  };

  /*direct Google diye login */
  const handleGoogleSingIn = () => {
    signInWithPopup(auth, googleProvide)
      .then((result) => {
        console.log(result);
      })
      .catch((error) => {
        console.log(error.message);
      });
  };

  /* github login */
  const handleGithubLogIn = () => {
    signInWithPopup(auth, githubProvider)
      .then((result) => {
        console.log(result);
      })
      .catch((error) => {
        console.log(error.message);
      });
  };

  /* Forget password function  */
  const handleForgetPassword = () => {
    const email = emailRef.current.value;
    if (!email) {
      console.log("Provide a valid email address");
    } else {
      sendPasswordResetEmail(auth, email).then(() => {
        alert("Password rest email sent, check your email ");
      });
    }
  };

  return (
    <div>
      <div className="hero bg-base-200 min-h-screen">
        <div className="hero-content flex-col">
          <div className="text-center lg:text-left">
            <h1 className="text-3xl font-bold">Log In</h1>
          </div>
          <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
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
                  ref={emailRef}
                />
              </div>
              <div className="form-control">
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
                <label onClick={handleForgetPassword} className="label">
                  <a href="#" className="label-text-alt link link-hover">
                    Forgot password?
                  </a>
                </label>
                <button
                  onClick={handleEyeBtn}
                  className="btn btn-xs absolute top-44 right-10"
                >
                  {showPassword ? <FaEyeSlash /> : <FaEye />}
                </button>
              </div>
              <div className="form-control mt-6">
                <button className="btn btn-primary">Log In</button>
              </div>
            </form>
            <div className="flex items-center justify-evenly text-4xl">
              {/* direct google login  */}
              <button onClick={handleGoogleSingIn}>
                <IoLogoGoogle className="text-red-400" />
              </button>
              {/* direct github login */}
              <button onClick={handleGithubLogIn}>
                <IoLogoGithub />
              </button>
            </div>

            {/* conditional   */}
            {success && (
              <p className="text-center text-green-500 text-xs font-semibold">
                User login successfully{" "}
              </p>
            )}
            {loginError && (
              <p className="text-center text-red-500 text-xs font-semibold">
                {loginError}
              </p>
            )}

            {/* Link */}
            <p className="p-4">
              If you haven't an account ? please
              <Link to="/signup">
                <span className="text-green-600 font-bold ml-2">SingUp</span>
              </Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
