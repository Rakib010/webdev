import { useForm } from "react-hook-form";
import { Link, useNavigate } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import useAuth from "../../hooks/useAuth";
import Swal from "sweetalert2";

const Register = () => {
  /* form submit  */
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();
  const { createUser, updateUserProfile } = useAuth();
  const navigate = useNavigate();

  const onSubmit = (data) => {
    console.log(data);
    createUser(data.email, data.password).then((res) => {
      console.log(res.user);
      updateUserProfile(data.name, data.photoURL)
        .then(() => {
          console.log("user Profile Info Update ");
          reset();
          Swal.fire({
            position: "top-end",
            icon: "success",
            title: "User crater Successfully",
            showConfirmButton: false,
            timer: 1000,
          });
          navigate("/");
        })
        .catch((err) => {
          console.log(err);
        });
    });
  };

  return (
    <>
      <Helmet>
        <title>Restaurant | Sign Up</title>
      </Helmet>
      <div className="flex items-center justify-center min-h-screen bg-gray-100">
        <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-sm">
          <h2 className="text-2xl font-bold text-center mb-6">Sign Up</h2>
          {/* form */}
          <form onSubmit={handleSubmit(onSubmit)}>
            {/* Name Input */}
            <div className="mb-4">
              <label htmlFor="name" className="block text-sm font-medium mb-1">
                Name
              </label>
              <input
                id="name"
                name="name"
                {...register("name", { required: true })}
                type="text"
                placeholder="Type here"
                className="w-full border border-gray-300 px-4 py-2 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
              />
              {errors.name && (
                <span className="text-red-600">Name field is required</span>
              )}
            </div>
            {/* photo url  */}
            <div className="mb-4">
              <label htmlFor="name" className="block text-sm font-medium mb-1">
                Photo URL
              </label>
              <input
                id="name"
                name="name"
                {...register("p hotoURl", { required: true })}
                type="text"
                placeholder="photoURL"
                className="w-full border border-gray-300 px-4 py-2 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
              />
              {errors.photoURL && (
                <span className="text-red-600">Name field is required</span>
              )}
            </div>

            {/* Email Input */}
            <div className="mb-4">
              <label htmlFor="email" className="block text-sm font-medium mb-1">
                Email
              </label>
              <input
                id="email"
                name="email"
                {...register("email", { required: true })}
                type="email"
                placeholder="Type here"
                className="w-full border border-gray-300 px-4 py-2 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
              />
              {errors.name && (
                <span className="text-red-600">Email field is required</span>
              )}
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
                {...register("password", {
                  required: true,
                  pattern:
                    /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{6,}$/,
                  minLength: 6,
                  maxLength: 20,
                })}
                type="password"
                placeholder="Enter your password"
                className="w-full border border-gray-300 px-4 py-2 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
              />
              {errors.password?.type === "required" && (
                <span className="text-red-600">password is required</span>
              )}
              {errors.password?.type === "minLength" && (
                <span className="text-red-600">
                  password Must be 6 character
                </span>
              )}
              {errors.password?.type === "pattern" && (
                <span className="text-red-600">
                  password Must be one character, one lower case,one upper
                  case,one number and one special character
                </span>
              )}
            </div>

            {/* Sign-Up Button */}
            <input
              type="submit"
              value="Sign Up"
              className="w-full bg-yellow-500 text-white font-semibold py-2 rounded-md hover:bg-yellow-600 cursor-pointer"
            />
          </form>
          {/* Link to Login */}
          <p className="text-center text-sm mt-4 text-gray-500">
            Already registered?{" "}
            <Link
              to="/login"
              className="text-yellow-600 font-semibold underline"
            >
              Go to log in
            </Link>
          </p>
        </div>
      </div>
    </>
  );
};

export default Register;
