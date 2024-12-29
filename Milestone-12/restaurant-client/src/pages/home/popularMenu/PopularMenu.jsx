import React, { useEffect, useState } from "react";
import SectionTitle from "../../../components/SectionTitle/SectionTitle";
import MenuItem from "../../shared/menuItem/MenuItem";

const PopularMenu = () => {
  const [menu, setMenu] = useState([]);

  useEffect(() => {
    fetch("menu.json")
      .then((res) => res.json())
      .then((data) => {
        // Filter items based on category "popular"
        const popularItems = data.filter((item) => item.category === "popular");
        setMenu(popularItems); // Update state with filtered items
      })
      .catch((error) => console.error("Error fetching menu data:", error));
  }, []);
  console.log(menu);

  return (
    <section className="my-8 w-11/12 mx-auto">
      {/* Section title */}
      <SectionTitle heading="From Our Menu" subHeading="Popular Items" />

      {/* Display popular menu items */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6 mt-8">
        {menu.length > 0 ? (
          menu.map((item) => <MenuItem key={item._id} item={item} />)
        ) : (
          <p className="text-center text-gray-500">No popular items found.</p>
        )}
      </div>
      <button className="btn my-4">View Full Menu</button>
    </section>
  );
};

export default PopularMenu;
