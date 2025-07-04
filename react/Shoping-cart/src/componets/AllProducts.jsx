import { useEffect, useState } from "react";
import SingleProducts from "./SingleProducts";

const AllProducts = ({handleSelectProduct}) => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch("fakeData.json")
      .then((res) => res.json())
      .then((data) => setProducts(data.products));
  }, []);

  return (
    <div>
      <h1 className="text-2xl">All Products</h1>

      {products.map((p) => (
        <SingleProducts key={p.id} product={p} handleSelectProduct={handleSelectProduct}></SingleProducts>
      ))}
    </div>
  );
};

export default AllProducts;
