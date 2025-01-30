import { Link, useNavigate } from "react-router-dom";
import { FcGoogle } from "react-icons/fc";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { useState } from "react";
import useAuth from "../../Hooks/useAuth";
import Swal from "sweetalert2";

const Register = () => {
  const { handleRegister, handleGoogleLogin, userProfile } = useAuth();
  const [error, setError] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const navigate = useNavigate();

  /* const navigate = useNavigate(); */

  const handleSubmit = (e) => {
    e.preventDefault();
    const form = e.target;
    const name = form.name.value;
    const photo = form.photo.value;
    const email = form.email.value;
    const password = form.password.value;
    /* const auth = { name, photo, email, password };
    console.log(auth); */

    setError("");

    if (password.length < 6) {
      setError("Password must contain at least 6 characters");
      return;
    }
    const regex = /^(?=.*[A-Z])(?=.*[a-z]).*$/;
    if (!regex.test(password)) {
      setError(
        "Password must contain at least one lowercase letter and one uppercase letter"
      );
      return;
    }

    handleRegister(email, password)
      .then((res) => {
        //console.log(res.user);
        userProfile(name, photo);
        Swal.fire({
          icon: "success",
          title: "Registration Successful",
          text: "You have successfully registered!",
          timer: 800,
          showConfirmButton: false,
        });
        navigate("/");
      })
      .catch((err) => {
        //console.log(err.message)
      });
  };

  const handleGoogle = () => {
    handleGoogleLogin()
      .then((res) => {
        //console.log(res.user);
        navigate("/");
      })
      .catch((err) => setError(err.message));
  };

  const handleEyeBtn = () => {
    setShowPassword(!showPassword);
  };

  return (
    <div>
      <div className="flex justify-center items-center">
        <div className="bg-base-100 w-full max-w-lg  border p-5 my-8 rounded-lg ">
          <h2 className="text-2xl font-semibold text-center">
            Register your account
          </h2>
          <form onSubmit={handleSubmit} className="card-body">
            <div className="form-control">
              <label className="label">
                <span className="label-text">Your Name</span>
              </label>
              <input
                type="text"
                placeholder="Enter your name"
                className="input input-bordered"
                /*  required */
                name="name"
              />
            </div>

            <div className="form-control">
              <label className="label">
                <span className="label-text">Photo URL</span>
              </label>
              <input
                type="text"
                placeholder="Enter photo URL"
                className="input input-bordered"
                /* required */
                name="photo"
              />
            </div>

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

            <div className="form-control relative">
              <label className="label">
                <span className="label-text">Password</span>
              </label>
              <input
                type={showPassword ? "text" : "password"}
                placeholder="Enter your password"
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

            <div className="form-control mt-6">
              <button type="submit" className="btn btn-success rounded-none">
                Register
              </button>
            </div>
          </form>
          {/* google login */}
          <div className="flex items-center justify-center mt-4">
            <button
              onClick={handleGoogle}
              className="btn btn-outline flex items-center gap-2"
            >
              {<FcGoogle size={20} />} Login with Google
            </button>
          </div>

          {error && (
            <p className="text-center text-xs text-red-500 mt-4">{error}</p>
          )}

          <p className="text-center font-semibold mt-6">
            Already Have An Account?{" "}
            <Link to="/login">
              <span className="text-red-500 underline">Login</span>
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Register;
