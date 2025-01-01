import React from "react";
import FoodCard from "../../../components/foodCard/FoodCard";

const OderTab = ({ items }) => {
  return (
    <div>
      <div className="grid md:grid-cols-3 gap-8">
        {items.map((item) => (
          <FoodCard key={item._id} item={item} />
        ))}
      </div>
    </div>
  );
};

export default OderTab;
