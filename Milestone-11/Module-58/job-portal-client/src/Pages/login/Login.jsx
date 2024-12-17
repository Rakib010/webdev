import { useContext } from "react";
import AuthContext from "../../context/AuthContext";
import { Link, useLocation, useNavigate } from "react-router-dom";
import axios from "axios";

const Login = () => {
  const { loginUser } = useContext(AuthContext);
  const location = useLocation();
  const navigate = useNavigate();
  const from = location.state || "/";

  const handleLogin = (e) => {
    e.preventDefault();
    const form = e.target;
    const email = form.email.value;
    const password = form.password.value;

    const loginData = { email, password };
    //console.log("Login Details:", loginData);

    //handle authentication logic here
    loginUser(email, password)
      .then((result) => {
        console.log("login", result.user.email);

        //send req post (token)
        /*   const user = { email: result.user.email };
        axios
          .post("https://job-portal-server-eta-six.vercel.app/jwt", user, {
            withCredentials: true, 
          })
          .then((res) => console.log(res.data)); */

        // navigate(from);
      })
      .catch((error) => console.log(error.message));
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="w-full max-w-sm bg-white shadow-lg rounded-lg p-8">
        <h1 className="text-2xl font-semibold text-center text-gray-800 mb-6">
          Log In
        </h1>
        {/* {error && (
          <p className="text-sm text-red-500 mb-4 text-center">{error}</p>
        )} */}
        <form onSubmit={handleLogin}>
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
          <div className="mb-6">
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
          <button
            type="submit"
            className="w-full bg-blue-600 text-white font-medium py-2 rounded-md hover:bg-blue-700 transition duration-150"
          >
            Log In
          </button>
        </form>
        <p className="text-center text-sm text-gray-600 mt-4">
          Don't have an account?{" "}
          <Link to="/register" className="text-blue-600 underline">
            Register
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Login;
