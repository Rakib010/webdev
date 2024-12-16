import React, { useState } from "react";
import { useLoaderData } from "react-router-dom";
import Card from "../components/Card";

const Coffees = () => {
  const data = useLoaderData();
  const [coffees, setCoffees] = useState(data);

  const handleSort = (sortBy) => {
    if (sortBy == "popularity") {
      // sort by popularity
      const sorted = [...data].sort((a, b) => b.popularity - a.popularity);
      setCoffees(sorted);
    } else if (sortBy == "rating") {
      // sort by rating
      const sorted = [...data].sort((a, b) => b.rating - a.rating);
      setCoffees(sorted);
    }
  };

  return (
    <div>
      <div className="flex justify-between items-center">
        <h1 className="md:text-3xl text-xl font-thin ">
          Sort Coffee's By Popularity & Rating
        </h1>
        <div className="flex gap-8">
          <button
            onClick={() => handleSort("popularity")}
            className="btn btn-warning"
          >
            Sort By Popularity
          </button>
          <button
            onClick={() => handleSort("rating")}
            className="btn btn-warning"
          >
            Sort By Rating
          </button>
        </div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 my-10">
        {coffees.map((coffeeItem, index) => (
          <Card key={index} coffeeItem={coffeeItem}></Card>
        ))}
      </div>
    </div>
  );
};

export default Coffees;
