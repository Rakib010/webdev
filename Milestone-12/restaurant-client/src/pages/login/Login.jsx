import { useEffect, useState } from "react";
import {
  loadCaptchaEnginge,
  LoadCanvasTemplate,
  validateCaptcha,
} from "react-simple-captcha";
import useAuth from "../../hooks/useAuth";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import Swal from "sweetalert2";

const Login = () => {
  const [disabled, setDisabled] = useState(true);
  const [errorMessage, setErrorMessage] = useState("");
  const { userLogin } = useAuth();
  const navigate = useNavigate();
  const location = useLocation();

  const from = location.state?.from?.pathname || "/";

  // captcha
  useEffect(() => {
    loadCaptchaEnginge(6); // 6-character captcha
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    const form = e.target;
    const email = form.email.value;
    const password = form.password.value;

    userLogin(email, password)
      .then((res) => {
        // console.log("Login successful:", res.user);
        Swal.fire({
          title: "User Login Successful",
          showClass: {
            popup: ` animate__animated animate__fadeInUp
            animate__faster `,
          },
          hideClass: {
            popup: ` animate__animated animate__fadeOutDown
            animate__faster`,
          },
        });
        navigate(from, { replace: true });
        form.reset();
      })
      .catch((error) => {
        setErrorMessage("Login failed. Please check your credentials.");
        console.log(error.message);
      });
  };

  const handleValidateCaptcha = (e) => {
    const user_captcha_value = e.target.value;
    if (validateCaptcha(user_captcha_value)) {
      setDisabled(false);
      setErrorMessage(""); // Clear previous error messages
    } else {
      setDisabled(true);
      setErrorMessage("Invalid captcha. Please try again.");
    }
  };

  return (
    <>
      <Helmet>
        <title>Restaurant | Login</title>
      </Helmet>
      <div className="flex items-center justify-center min-h-screen bg-gray-100">
        <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-sm">
          <h2 className="text-2xl font-bold text-center mb-6">Login</h2>

          <form onSubmit={handleSubmit}>
            {/* Email Input */}
            <div className="mb-4">
              <label htmlFor="email" className="block text-sm font-medium mb-1">
                Email
              </label>
              <input
                id="email"
                name="email"
                type="email"
                placeholder="Type here"
                required
                className="w-full border border-gray-300 px-4 py-2 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
                aria-label="Email"
              />
            </div>

            {/* Password Input */}
            <div className="mb-4">
              <label
                htmlFor="password"
                className="block text-sm font-medium mb-1"
              >
                Password
              </label>
              <input
                id="password"
                name="password"
                type="password"
                placeholder="Enter your password"
                required
                className="w-full border border-gray-300 px-4 py-2 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
                aria-label="Password"
              />
            </div>

            {/* Captcha */}
            <div className="mb-4">
              <label className="block mb-2 text-blue-600 text-sm underline">
                <LoadCanvasTemplate />
              </label>
              <input
                onBlur={handleValidateCaptcha}
                type="text"
                name="captcha"
                placeholder="Type captcha here"
                required
                className="w-full border border-gray-300 px-4 py-2 rounded-md mt-2 focus:outline-none focus:ring-2 focus:ring-indigo-500"
                aria-label="Captcha"
              />
              <button
                type="button"
                className="w-full mt-2 py-1 text-sm bg-blue-500 text-white rounded-md hover:bg-blue-600"
                aria-label="Validate Captcha"
              >
                Validate
              </button>
            </div>

            {/* Error Message */}
            {errorMessage && (
              <p className="text-red-500 text-sm mb-4">{errorMessage}</p>
            )}

            {/* Sign In Button */}
            <button
              /*  disabled={disabled} */
              disabled={false}
              type="submit"
              className={`w-full text-white font-semibold py-2 rounded-md ${
                disabled
                  ? "bg-gray-400 cursor-not-allowed"
                  : "bg-yellow-500 hover:bg-yellow-600"
              }`}
            >
              Login
            </button>
          </form>

          <p className="text-center text-sm mt-4 text-gray-500">
            New Here?{" "}
            <Link
              to="/register"
              className="text-yellow-600 font-semibold underline"
            >
              Create an Account
            </Link>
          </p>
        </div>
      </div>
    </>
  );
};

export default Login;
