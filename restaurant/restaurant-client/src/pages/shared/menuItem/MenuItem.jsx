import React from "react";

const MenuItem = ({ item }) => {
  const { name, image, recipe, price } = item;

  return (
    <div className="flex items-center gap-4 p-4 bg-white shadow-md rounded-lg">
      {/* Image Section */}
      <img
        src={image}
        alt={name}
        className="w-24 h-24 object-cover rounded-full border border-gray-200"
      />

      {/* Content Section */}
      <div className="flex-1">
        <h3 className="text-lg font-semibold text-gray-800 flex justify-between">
          {name}
          <span className="text-primary font-bold">${price}</span>
        </h3>
        <p className="text-gray-500 text-sm mt-1">{recipe}</p>
      </div>
    </div>
  );
};

export default MenuItem;
