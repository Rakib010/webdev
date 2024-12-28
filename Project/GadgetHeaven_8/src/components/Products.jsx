import { useLoaderData, useParams } from "react-router-dom";
import Product from "./Product";
import { useEffect, useState } from "react";

const Products = () => {
  const allProduct = useLoaderData();
  /* console.log(allProduct); */
  const { category } = useParams();
  /* console.log(category); */

  const [products, setProducts] = useState([]);

  useEffect(() => {
    if (category) {
      const filteredByCategory = [...allProduct].filter(
        (product) => product.category === category
      );
      setProducts(filteredByCategory);
    } else {
      setProducts(allProduct.slice(0, 6));
    }
  }, [category, allProduct]);

  return (
    <div>
      <div className="grid grid-cols-3 gap-4">
        {products.map((product, index) => (
          <Product key={index} product={product} />
        ))}
      </div>
    </div>
  );
};

export default Products;
