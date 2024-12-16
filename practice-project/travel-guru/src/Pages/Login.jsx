import React from "react";
import { Link } from "react-router-dom";

const Login = () => {
  return (
    <div className="min-h-screen flex items-center justify-center mt-8 mb-4">
      <div className="w-full max-w-md p-6 border rounded-lg ">
        <h2 className="text-2xl font-bold text-center mb-6">Login</h2>
        <form>
          {/* Username or Email */}
          <div className="mb-4">
            <input
              type="text"
              id="email"
              className="w-full border-b border-gray-300 rounded-md px-3 py-2 mt-1   focus:outline-none"
              placeholder="Enter your username or email"
            />
          </div>

          {/* Password */}
          <div className="mb-4">
            <input
              type="password"
              id="password"
              className="w-full border-b border-gray-300 rounded-md px-3 py-2 mt-1  focus:outline-none"
              placeholder="Enter your password"
            />
          </div>

          {/* Remember Me and Forgot Password */}
          <div className="flex items-center justify-between mb-6">
            <div>
              <input type="checkbox" id="rememberMe" className="mr-2" />
              <label htmlFor="rememberMe" className="text-sm text-gray-600">
                Remember Me
              </label>
            </div>
            <a href="#" className="text-sm text-yellow-500 hover:underline">
              Forgot Password
            </a>
          </div>

          {/* Login Button */}
          <button
            type="submit"
            className="w-full bg-yellow-500 hover:bg-yellow-600 text-white font-medium py-2 rounded-md transition duration-200"
          >
            Login
          </button>
        </form>

        {/* Footer Links */}
        <p className="text-center text-sm text-gray-600 mt-6">
          Don’t have an account?{" "}
          <Link to='/register' className="text-yellow-500 hover:underline font-medium">
            Create an account
          </Link>
        </p>

        {/* Divider */}
        <div className="flex items-center justify-center my-6">
          <div className="w-1/3 h-px bg-gray-300"></div>
          <span className="text-sm text-gray-500 mx-3">Or</span>
          <div className="w-1/3 h-px bg-gray-300"></div>
        </div>

        {/* Social Login Buttons */}
        <div className="space-y-3">
          <button className="w-full flex items-center justify-center border border-gray-300 rounded-md py-2 bg-white hover:bg-gray-50 transition duration-200">
            <img
              src="https://img.icons8.com/color/24/facebook.png"
              alt="Facebook"
              className="mr-3"
            />
            Continue with Facebook
          </button>
          <button className="w-full flex items-center justify-center border border-gray-300 rounded-md py-2 bg-white hover:bg-gray-50 transition duration-200">
            <img
              src="https://img.icons8.com/color/24/google-logo.png"
              alt="Google"
              className="mr-3"
            />
            Continue with Google
          </button>
        </div>
      </div>
    </div>
  );
};

export default Login;
