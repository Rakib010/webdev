import { FcGoogle } from "react-icons/fc";
import { Link, useNavigate } from "react-router-dom";
import useAuth from "../../Hooks/useAuth";
import Swal from "sweetalert2";

const Login = () => {
  const { handleLogin, handleGoogleLogin } = useAuth();
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    const form = e.target;
    const email = form.email.value;
    const password = form.password.value;
    // console.log(email, password);

    handleLogin(email, password)
      .then((res) => {
        Swal.fire({
          icon: "success",
          title: "Login Successful",
          text: "Welcome back!",
          timer: 1000,
          showConfirmButton: false,
        });
        navigate("/");
      })
      .catch((err) => {
        Swal.fire({
          icon: "error",
          title: "Login Failed",
          text: "Incorrect email or password. Please try again.",
          timer: 1000,
          showConfirmButton: false,
        });
      });
  };

  const handleGoogle = () => {
    handleGoogleLogin()
      .then((res) => {
        // console.log(res.user);
        navigate("/");
      })
      .catch((err) => {
       // console.log(err.message);
      });
  };

  return (
    <div>
      <div className="flex justify-center items-center">
        <div className="w-full max-w-lg shrink-0 rounded-none border p-4 my-10 ">
          <h2 className="text-2xl font-semibold text-center">
            Login to Your Account
          </h2>
          <form onSubmit={handleSubmit} className="card-body">
            <div className="form-control">
              <label className="label">
                <span className="label-text">Email</span>
              </label>
              <input
                type="email"
                placeholder="Enter your email"
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
                placeholder="Enter your password"
                className="input input-bordered"
                required
                name="password"
              />
              <label className="label">
                <Link
                  to="/forgetPassword"
                  className="label-text-alt link link-hover"
                >
                  Forgot password?
                </Link>
              </label>
            </div>
            <div className="form-control mt-6">
              <button type="submit" className="btn btn-success  rounded-none">
                Login
              </button>
            </div>
          </form>
          {/* Google Login Button */}
          <div className="flex items-center justify-center mt-2">
            <button
              onClick={handleGoogle}
              className="btn btn-outline flex items-center gap-2"
            >
              <FcGoogle size={20} /> Login with Google
            </button>
          </div>
          {/* Register Link */}
          <p className="text-center font-semibold mt-6">
            Don't Have An Account?{" "}
            <Link to="/register">
              <span className="text-red-500 underline">Register</span>
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Login;
