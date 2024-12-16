import { useEffect, useState } from "react";
import Bottle from "./Bottle";
import "./bottle.css";
import { addToLS, getstoreCart } from "../utilitis/LocalStorage";

const Bottles = () => {
  const [bottles, setBottles] = useState([]);

  const [cart, setCart] = useState([]);

  useEffect(() => {
    fetch("bottle.json")
      .then((res) => res.json())
      .then((data) => setBottles(data));
  }, []);

  // load cart from local storage

  useEffect(() => {
    console.log("called the useEffect");
    if (bottles.length > 0) {
      const storeCart = getstoreCart();
      console.log(storeCart);
    }
  }, [bottles]);

  //ey jaygay question ashe like bottle pathaitasi btn ke naki btn bottle handle ke pathaitase
  const handleAddToCart = (bottle) => {
    /*  console.log(bottle); */
    const newCart = [...cart, bottle];
    setCart(newCart);
    addToLS(bottle.id);
  };

  return (
    <div>
      <h2>Bottles Available:{bottles.length}</h2>
      <h4>Cart:{cart.length}</h4>
      <div className="bottle-container">
        {bottles.map((bottle) => (
          <Bottle
            key={bottle.key}
            bottle={bottle}
            handleAddToCart={handleAddToCart}
          ></Bottle>
        ))}
      </div>
    </div>
  );
};

export default Bottles;
