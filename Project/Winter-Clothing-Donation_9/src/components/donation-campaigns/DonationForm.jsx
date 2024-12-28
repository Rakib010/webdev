import React from "react";
import { useForm } from "react-hook-form";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const DonationForm = () => {
  const { register, handleSubmit, reset } = useForm({
    defaultValues: {
      quantity: "",
      itemType: "",
      location: "",
      notes: "",
    },
  });

  const onSubmit = (data) => {
    toast.success("Thank you For Donation!");
    reset();
    /* console.log("Form Data:", data); */
  };

  return (
    <div className="max-w-md mt-10 mx-auto rounded-lg p-6 bg-white  shadow-lg">
      <h2 className="text-2xl font-bold text-center mb-6">Donate Now</h2>
      <form onSubmit={handleSubmit(onSubmit)}>

        <div className="form-control mb-4">
          <label className="label">
            <span className="label-text">Quantity of items</span>
          </label>
          <input
            type="text"
            placeholder="2 jackets, 3 blankets"
            className="input input-bordered w-full"
            {...register("itemType", { required: true })}
          />
        </div>
        <div className="form-control mb-4">
          <label className="label">
            <span className="label-text">Item type</span>
          </label>
          <input
            type="text"
            placeholder="blanket, jacket, sweater"
            className="input input-bordered w-full"
            {...register("itemType", { required: true })}
          />
        </div>
        <div className="form-control mb-4">
          <label className="label">
            <span className="label-text">Pickup location</span>
          </label>
          <input
            type="text"
            placeholder="location"
            className="input input-bordered w-full"
            {...register("location", { required: true })}
          />
        </div>
        <div className="form-control mb-4">
          <label className="label">
            <span className="label-text">Additional notes</span>
          </label>
          <textarea
            placeholder="Any additional information"
            className="textarea textarea-bordered w-full"
            {...register("notes")}
          ></textarea>
        </div>
        <button type="submit" className="btn btn-success w-full">
          Submit
        </button>
      </form>
      
      {/* Toast Container */}
      <ToastContainer />
    </div>
  );
};

export default DonationForm;
