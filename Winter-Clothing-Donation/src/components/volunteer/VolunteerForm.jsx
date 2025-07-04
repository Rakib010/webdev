import React from "react";
import { useForm } from "react-hook-form";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const VolunteerForm = () => {
  const { register, handleSubmit, reset } = useForm({
    defaultValues: {
      name: "",
      email: "",
      phone: "",
      message: "",
    },
  });

  const onSubmit = (data) => {
    toast.success("Thank you for joining our Volunteer Team!");
    reset();
    /* console.log("Form Data:", data); */
  };

  return (
    <div
      className="py-10 my-10"
      style={{
        background: "linear-gradient(to bottom, #f0f4f8, #d9e2ec)", 
        minHeight: "100vh",
      }}
    >
      <div className="px-6">
        <h2 className="text-3xl font-extrabold text-center mb-4 text-gray-800">
          Join Our Volunteer Team
        </h2>
        <p className="text-lg text-gray-700 text-center mb-10">
          Fill out the form below to join our team and make a difference in the
          community!
        </p>

        <form
          onSubmit={handleSubmit(onSubmit)}
          className="max-w-xl mx-auto bg-white p-8 rounded-lg shadow-lg border"
        >
          <div className="space-y-6">
            <div className="form-control">
              <label className="label">
                <span className="label-text text-gray-700">Name</span>
              </label>
              <input
                type="text"
                placeholder="Enter your full name"
                className="input input-bordered w-full"
                {...register("name", { required: "Name is required" })}
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text text-gray-700">Email</span>
              </label>
              <input
                type="email"
                placeholder="Enter your email address"
                className="input input-bordered w-full"
                {...register("email", { required: "Email is required" })}
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text text-gray-700">Phone Number</span>
              </label>
              <input
                type="tel"
                placeholder="Enter your phone number"
                className="input input-bordered w-full"
                {...register("phone", { required: "Phone number is required" })}
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text text-gray-700">
                  Why do you want to join?
                </span>
              </label>
              <textarea
                placeholder="Tell us why you want to volunteer with us"
                className="textarea textarea-bordered w-full"
                {...register("message", { required: "Message is required" })}
              ></textarea>
            </div>

            {/* Submit Button */}
            <div className="mt-6">
              <button
                type="submit"
                className="btn btn-success w-full hover:shadow-lg transition-all duration-300"
              >
                Submit
              </button>
            </div>
          </div>
        </form>

        {/* Toast Notifications */}
        <ToastContainer />
      </div>
    </div>
  );
};

export default VolunteerForm;
