import Lottie from "lottie-react";
import React, { useContext } from "react";
import { Link } from "react-router-dom";
import registerLottieData from "../../assets/lottie/register.json";
import AuthContext from "../../context/AuthContext";

const Register = () => {
  const { createUser } = useContext(AuthContext);

  const handleRegister = (e) => {
    e.preventDefault();
    const form = e.target;
    const name = form.name.value;
    const email = form.email.value;
    const password = form.password.value;
    const register = {
      name,
      email,
      password,
    };

    // password validation
   /*  const passwordRegex =
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*])[A-Za-z\d!@#$%^&*]{6,}$/;

    if (passwordRegex.test(password)) {
      console.log("valid password");
      return;
    }
 */
    createUser(email, password)
      .then((res) => console.log(res.user))
      .catch((error) => {
        console.log(error.message);
      });
  };

  return (
    <div className="flex flex-col lg:flex-row-reverse justify-center items-center min-h-screen bg-gray-100">
      {/* Lottie Animation Section */}
      <div className="w-full lg:w-1/2 px-6 lg:px-12">
        <Lottie
          animationData={registerLottieData}
          loop={true}
          className="max-w-full h-auto"
        />
      </div>

      {/* Registration Form */}
      <div className="w-full lg:w-1/2 max-w-md bg-white border my-10 rounded-lg p-8">
        <h1 className="text-3xl font-semibold text-center text-gray-800">
          Register
        </h1>
        {/* Google Sign-Up Button */}
        <button className="flex items-center justify-center w-full mt-4 bg-white border border-gray-300 hover:bg-gray-50 text-gray-700 font-medium py-2 rounded-md transition duration-150">
          Sign up with Google
        </button>

        {/* Divider */}
        <div className="flex items-center my-6">
          <hr className="flex-1 border-gray-300" />
          <span className="px-3 text-gray-500">Or continue with</span>
          <hr className="flex-1 border-gray-300" />
        </div>

        {/* Registration Form */}
        <form onSubmit={handleRegister}>
          <div className="mb-4">
            <label
              className="block text-sm font-medium text-gray-700"
              htmlFor="fullName"
            >
              Full Name *
            </label>
            <input
              type="text"
              required
              name="name"
              className="mt-1 w-full px-3 py-2 border rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
              placeholder="Steven Job"
            />
          </div>

          <div className="mb-4">
            <label
              className="block text-sm font-medium text-gray-700"
              htmlFor="email"
            >
              Email *
            </label>
            <input
              type="email"
              required
              name="email"
              className="mt-1 w-full px-3 py-2 border rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
              placeholder="stevenjob@gmail.com"
            />
          </div>
          <div className="mb-4">
            <label
              className="block text-sm font-medium text-gray-700"
              htmlFor="password"
            >
              Password *
            </label>
            <input
              type="text"
              required
              name="password"
              className="mt-1 w-full px-3 py-2 border rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
              placeholder="********"
            />
          </div>
          {/* Terms and Policy */}
          <div className="flex items-center mb-4">
            <input
              type="checkbox"
              id="terms"
              name="checkbox"
              className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded"
            />
            <label htmlFor="terms" className="ml-2 text-sm text-gray-700">
              Agree to our{" "}
              <Link className="text-blue-600 underline">terms and policy</Link>
            </label>
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className="w-full bg-blue-600 text-white font-medium py-2 rounded-md hover:bg-blue-700 transition duration-150"
          >
            Register
          </button>
        </form>

        {/* Already Registered? */}
        <p className="text-center text-sm text-gray-600 mt-4">
          Already have an account?{" "}
          <Link to="/login" className="text-blue-600 underline">
            Log In
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Register;
