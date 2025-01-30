import React, { useState } from "react";
import { useLoaderData } from "react-router-dom";
import CoffeeCard from "./CoffeeCard";

const AllCoffee = () => {
  const showCoffee = useLoaderData();
  /* console.log(showCoffee); */
  const [coffees, setCoffees] = useState(showCoffee);
  return (
    <div>
      <h1 className="text-4xl text-center font-serif">
        Coffee Item:{coffees.length}
      </h1>
      <div className="grid grid-cols-2 gap-5 ">
        {coffees.map((coffee) => (
          <CoffeeCard
            key={coffee._id}
            coffee={coffee}
            coffees={coffees}
            setCoffees={setCoffees}
          ></CoffeeCard>
        ))}
      </div>
    </div>
  );
};

export default AllCoffee;
