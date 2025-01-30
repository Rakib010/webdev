import React from "react";
import { NavLink, useLoaderData } from "react-router-dom";

const Categories = () => {
  const categories = useLoaderData();
  /*  console.log(categories); */

  return (
    <div>
      <div className="w-52 bg-[#09080F1A] p-4 h-80 rounded-lg ">
        <div className="flex flex-col">
          {categories.map((category, index) => (
            <NavLink
              key={index}
              to={`/category/${category.category}`}
              className={({ isActive }) =>
                `font-semibold mb-2 ${
                  isActive
                    ? "btn border border-purple-500 "
                    : "bg-purple-200 btn"
                }`
              }
            >
              {category.category}
            </NavLink>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Categories;
