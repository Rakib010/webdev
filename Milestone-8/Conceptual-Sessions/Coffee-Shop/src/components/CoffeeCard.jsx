import { useLoaderData, useNavigate, useParams } from "react-router-dom";
import Card from "./Card";
import { useEffect, useState } from "react";
const CoffeeCard = () => {
  const navigate = useNavigate();

  const allData = useLoaderData();
  const { category } = useParams();
  const [coffees, setCoffees] = useState([]);

  useEffect(() => {
    /* category wise divide hocche if r else hocche all data show korbe slice hocche 6 ta data show korbe  */
    /* dependence hocche function er bhaire jei variable gula vitore use kora hoise sei gula aber call kore deawa */
    if (category) {
      const filterByCategory = [...allData].filter(
        (coffee) => coffee.category === category
      );
      setCoffees(filterByCategory);
    } else {
      setCoffees(allData.slice(0, 6));
    }
  }, [category, allData]);

  return (
    <div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 my-10">
        {coffees.map((coffeeItem, index) => (
          <Card key={index} coffeeItem={coffeeItem}></Card>
        ))}
      </div>

      <button
        className="btn mt-8 btn-secondary"
        onClick={() => navigate("/coffees")}
      >
        View All
      </button>
    </div>
  );
};

export default CoffeeCard;
