import React, { useContext, useRef } from "react";
import { sendPasswordResetEmail } from "firebase/auth";
import { authContext } from "../AuthProvider/AuthProvider";
import auth from "../../Firebase/firebase.config";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const ForgetPassword = () => {
  const { email } = useContext(authContext);
  const emailRef = useRef();

  const handleForgetPassword = (e) => {
    e.preventDefault();

    const email = emailRef.current.value;
    /* console.log(email); */
    if (!email) {
      toast("Please provide a valid email address.");
      return;
    }

    sendPasswordResetEmail(auth, email)
      .then(() => {
        toast.success("Password reset email sent! Check your inbox.");
      })
      .catch((error) => {
        /* console.error("Error sending password reset email:", error.message); */
        toast(error.message);
      });
  };

  return (
    <div className="flex items-center justify-center mt-10 mb-20">
      <div className="w-96 bg-white p-6 rounded-lg shadow-md">
        <h2 className="text-2xl font-semibold text-center mb-6">
          Forgot Password
        </h2>
        <form onSubmit={handleForgetPassword}>
          <div className="form-control mb-4">
            <label className="label">
              <span className="label-text font-medium text-gray-700">
                Email
              </span>
            </label>
            <input
              type="email"
              name="email"
              placeholder="Enter your email"
              ref={emailRef}
              defaultValue={email}
              className="input input-bordered w-full"
            />
          </div>
          <div className="form-control">
            <button type="submit" className="btn btn-success w-full mb-4">
              Reset Password
            </button>
          </div>
        </form>
      </div>
      {/* Toast Container */}
      <ToastContainer />
    </div>
  );
};

export default ForgetPassword;
