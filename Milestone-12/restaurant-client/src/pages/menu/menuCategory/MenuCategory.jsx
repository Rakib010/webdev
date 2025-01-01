import React from "react";
import MenuItem from "../../shared/menuItem/MenuItem";
import Cover from "../../shared/cover/Cover";
import { Link } from "react-router-dom";

const MenuCategory = ({ items, title, Img }) => {
  return (
    <div>
      {title && <Cover img={Img} title={title} />}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6 mt-16">
        {items.map((item) => (
          <MenuItem key={item._id} item={item} />
        ))}
      </div>
      <div className="flex justify-center">
        <Link
          /* to={`/order/${title}`} */
          className="btn btn-outline border border-b-4 mt-6 mb-16"
        >
          Order Now
        </Link>
      </div>
    </div>
  );
};

export default MenuCategory;
