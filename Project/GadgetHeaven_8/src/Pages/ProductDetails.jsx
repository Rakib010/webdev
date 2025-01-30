import React, {
  createContext,
  useContext,
  useEffect,
  useRef,
  useState,
} from "react";
import Heading from "../components/Heading";
import { useLoaderData, useParams } from "react-router-dom";
import { FaStar, FaRegHeart } from "react-icons/fa";
import { CartContext } from "../contexts/ProductsContext";

const ProductDetails = () => {
  const { product_id } = useParams();
  const allProduct = useLoaderData();
  const [products, setProducts] = useState({});

  let btnRef = useRef();

  const { addToCart, addToWishList } = useContext(CartContext);

  useEffect(() => {
    const product = allProduct.find(
      (item) => item.product_id === parseInt(product_id)
    );
    setProducts(product);
  }, [allProduct, product_id]);


  const handleClick = (e) => {
    if (btnRef.current) {
      btnRef.current.setAttribute("disabled", "disabled");
    }
  };

  const {
    product_image,
    price,
    product_title,
    rating,
    availability,
    description,
    Specification,
  } = products;


  return (
    <div className="relative bg-[#9538E2] text-white   px-4 rounded-lg border-2 mb-[500px] ">
      <Heading
        title="Product Details"
        subtitle="Discover cutting-edge gadgets designed to elevate your lifestyle, with everything from innovative devices to must-have accessories!"
      />

      {/*Product Card */}
      <div className="absolute top-[200px] md:top-[160px] left-1/2 transform -translate-x-1/2 w-[90%] sm:w-[80%] md:w-[70%] bg-white text-gray-800 rounded-lg shadow-lg flex flex-col lg:flex-row items-start p-4 md:p-10 ">
   
        <div className="w-full lg:w-1/2 flex justify-center mb-6 lg:mb-0">
          <img
            className="w-96 h-[400px] object-cover rounded-xl bg-slate-300 "
            src={product_image}
            alt={product_title}
          />
        </div>

        {/* Details Section */}
        <div className="w-full lg:w-1/2 space-y-2 px-4">
          <h2 className="text-xl font-bold  mb-2">{product_title}</h2>
          <p className="text-xl font-semibold ">Price: ${price}</p>
          <p
            className={`text-md font-medium ${
              availability ? "text-green-600 btn" : "text-red-600"
            }`}
          >
            {availability ? "In Stock" : "Out of Stock"}
          </p>
          <p className="text-gray-700">{description}</p>

          <p className="font-semibold mt-4">Specifications:</p>
          <ul className="list-disc list-inside text-gray-600 space-y-1">
            {Specification &&
              Specification.map((specif, index) => (
                <li key={index}>{specif}</li>
              ))}
          </ul>

          {/* Rating Section */}
          <h1 className="font-semibold">Rating:</h1>
          <div className="flex items-center">
            <div className="flex text-yellow-500">
              <p>
                <FaStar />
              </p>
              <p>
                <FaStar />
              </p>
              <p>
                <FaStar />
              </p>
              <p>
                <FaStar />
              </p>
              <p>
                <FaStar />
              </p>
            </div>
            <p className="ml-2 text-gray-600">{rating}</p>
          </div>
          <div className="flex gap-4">
            <button
              onClick={() => addToCart(products)}
              className="btn border-purple-400 border"
            >
              Add To Cart
            </button>
            <button
              ref={btnRef}
              onClick={() => {
                addToWishList(products);
                handleClick();
              }}
              className="btn border-purple-400 border"
            >
              <FaRegHeart />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;
