import React from "react";
import { Helmet } from "react-helmet";
import Heading from "../components/Heading";
import { useLoaderData } from "react-router-dom";
import { FaStar } from "react-icons/fa"; 

const Trending = () => {
  const product = useLoaderData();

  return (
    <div className="relative">
      <Helmet>
        <title>Trending | GadgetHeaven</title>
      </Helmet>

      <Heading
        title="Trending Products"
        subtitle="Stay ahead with the latest trends shaping the world of tech and lifestyle. Discover what's popular and explore the top choices everyone is talking about."
      />
      <div className="absolute top-40 left-[480px]">
        <button className="btn border-pink-400 border-2 font-semibold ">
          View All Product
        </button>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 p-4">
        {product.map((p, index) => (
          <div
            key={index}
            className="bg-white shadow-md rounded-lg overflow-hidden hover:shadow-lg transition-shadow duration-300"
          >
            <img
              src={p.product_image}
              alt={p.product_name}
              className="w-full h-48 object-cover"
            />
            <div className="p-4 space-y-4">
              <h3 className="text-lg font-semibold">{p.product_name}</h3>
              <p className="text-gray-600">{p.description}</p>
              <p className="text-purple-600 font-bold mt-2">
                Price: ${p.price}
              </p>

              {/* Rating Section */}
              <div className="flex items-center justify-between">
                <div className="flex text-yellow-500">
                  {[...Array(5)].map((_, i) => (
                    <FaStar
                      key={i}
                      className={
                        i < p.rating ? "text-yellow-500" : "text-gray-400"
                      }
                    />
                  ))}
                </div>
                <p className="text-sm text-gray-600">{p.rating} / 5</p>
              </div>

              <div className="flex items-center justify-between">
                <p className="text-sm text-gray-600">Reviews: {p.reviews}</p>

                <p className="text-sm text-gray-600">
                  Purchases: {p.purchase_count}
                </p>

                <p className="text-sm text-gray-600">Views: {p.view_count}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Trending;
