import React from "react";
import { useForm } from "react-hook-form";
import { useLoaderData } from "react-router-dom";
import useAxiosPublic from "../../../hooks/useAxiosPublic";
import useAxiosSecure from "../../../hooks/useAxiosSecure";
import toast from "react-hot-toast";

// image
const image_key = import.meta.env.VITE_IMAGE_HOSTING_KEY;
const image_api = `https://api.imgbb.com/1/upload?key=${image_key}`;

const UpdateItem = () => {
  const { name, category, recipe, image, price, _id } = useLoaderData();

  const { register, handleSubmit, reset } = useForm();
  const axiosPublic = useAxiosPublic();
  const axiosSecure = useAxiosSecure();

  
  const onSubmit = async (data) => {
    //console.log(data);

    // image upload to imgbb and then get an url
    const imageFile = { image: data.image[0] };
    const res = await axiosPublic.post(image_api, imageFile, {
      headers: {
        "Content-Type": "multipart/form-data",
      },
    });
    if (res.data.success) {
      // now send the menu item data to the server with the image
      const menuItem = {
        name: data.name,
        category: data.category,
        recipe: data.recipe,
        price: parseInt(data.price),
        image: res.data.data.display_url,
      };
      // send server side
      const menuRes = await axiosSecure.patch(`/menu/${_id}`, menuItem);
      //console.log(menuRes.data);
      if (menuRes.data.modifiedCount > 0) {
        //reset();
        toast.success(`${data.name} is updated the menu`);
      }
    }
  };

  return (
    <div>
      <div className="min-h-screen bg-gray-100 flex items-center justify-center">
        <div className="bg-white p-8 rounded-lg shadow-lg max-w-lg w-full">
          <h2 className="text-2xl font-bold text-center mb-6">
            Update recipe
          </h2>
          <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
            {/* Recipe Name */}
            <div className="form-control">
              <label className="label">
                <span className="label-text text-gray-700">Recipe Name*</span>
              </label>
              <input
                type="text"
                placeholder="Enter recipe name"
                defaultValue={name}
                {...register("name", { required: true })}
                className="input input-bordered w-full"
              />
            </div>

            {/* Category and Price */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {/* Category */}
              <div className="form-control">
                <label className="label">
                  <span className="label-text text-gray-700">Category*</span>
                </label>
                <select
                  {...register("category", { required: true })}
                  className="select select-bordered w-full"
                >
                  <option disabled value={category}>
                    Select a category
                  </option>
                  <option value="salad">Salad</option>
                  <option value="pizza">Pizza</option>
                  <option value="soup">Soup</option>
                  <option value="dessert">Dessert</option>
                  <option value="drinks">Drinks</option>
                </select>
              </div>

              {/* Price */}
              <div className="form-control">
                <label className="label">
                  <span className="label-text text-gray-700">Price*</span>
                </label>
                <input
                  type="number"
                  placeholder="Enter price"
                  defaultValue={price}
                  {...register("price", { required: true })}
                  className="input input-bordered w-full"
                />
              </div>
            </div>

            {/* Recipe Details */}
            <div className="form-control">
              <label className="label">
                <span className="label-text text-gray-700">Recipe Details</span>
              </label>
              <textarea
                className="textarea textarea-bordered w-full h-24"
                placeholder="Describe your recipe"
                defaultValue={recipe}
                {...register("recipe")}
              ></textarea>
            </div>

            {/* File Input */}
            <div className="form-control">
              <label className="label">
                <span className="label-text text-gray-700">Upload Image</span>
              </label>
              <input
                type="file"
                {...register("image", { required: true })}
                className="file-input file-input-bordered w-full"
              />
            </div>

            {/* Submit Button */}
            <div className="form-control">
              <button type="submit" className="btn w-full">
                update Recipe
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default UpdateItem;
