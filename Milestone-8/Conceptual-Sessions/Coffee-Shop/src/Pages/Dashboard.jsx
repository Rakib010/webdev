import React, { useEffect, useState } from "react";
import Heading from "../components/Heading";
import { getAllFavorites, removeFavorite } from "../utills";
import Card from "../components/Card";


const Dashboard = () => {
  const [coffees, setCoffees] = useState([]);

  useEffect(() => {
    const favorite = getAllFavorites();
    setCoffees(favorite);
  }, []);

  const handleRemove = (id) => {
    removeFavorite(id);
    // 
    const favorite = getAllFavorites();
    setCoffees(favorite);
  };

  return (
    <div>
      <Heading
        title="Welcome to Dashboard"
        subtitle="Manage coffees that you have previously added as favorite. You can view or remove them from here."
      />
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 my-10">
        {coffees.map((coffeeItem, index) => (
          <Card
            key={index}
            coffeeItem={coffeeItem}
            handleRemove={handleRemove}
          ></Card>
        ))}
      </div>
    </div>
  );
};

export default Dashboard;
