import React from "react";

const FoodCard = ({ item }) => {
  const { name, image, recipe, price } = item;
  return (
    <div className="">
      <div className="card bg-base-100 w-96 shadow-xl">
        <figure>
          <img src={image} />
        </figure>
        <p className="absolute right-0 mr-4 mt-4 px-2 rounded-sm bg-slate-900 text-white">
          ${price}
        </p>
        <div className="card-body">
          <h2 className="card-title">{name}</h2>
          <p>{recipe}</p>
          <div className="card-actions justify-center">
            <button className="btn btn-outline border border-b-4">
              Add To Cart
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FoodCard;
