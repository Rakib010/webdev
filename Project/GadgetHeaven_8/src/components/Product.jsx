import { Link, NavLink, useNavigate } from "react-router-dom";

const Product = ({ product }) => {
  const { product_image, price, product_title, product_id } = product;

  return (
    <div className="p-4 border-2 rounded-lg bg-[#D9D9D9]">
      <img
        className="w-full h-52 object-cover rounded-lg"
        src={product_image}
        alt={product_title}
      />
      <h1 className="mt-4 font-bold text-xl">{product_title}</h1>
      <h1 className="text-lg font-semibold my-3">Price: {price}$</h1>
      <NavLink to={`/product/${product_id}`}>
        <button className="btn border border-purple-400">View Details</button>
      </NavLink>
    </div>
  );
};

export default Product;


