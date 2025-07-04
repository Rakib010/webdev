import React, { useContext, useState } from "react";
import Heading from "../components/Heading";
import { CartContext } from "../contexts/ProductsContext";
import { RiDeleteBack2Fill } from "react-icons/ri";
import { Helmet } from "react-helmet";
import Modal from "../components/Modal";

const Dashboard = () => {
  const { cartItems, wishList, totalCartPrice, sortCartByPrice, setCartItems } =
    useContext(CartContext);
  const [activeTab, setActiveTab] = useState("cart");
  const [showModal, setShowModal] = useState(false);
  const [purchaseTotal, setPurchaseTotal] = useState(0);

  const handlePurchase = () => {
    if (cartItems.length > 0) {
      setPurchaseTotal(totalCartPrice); 
      setShowModal(true); 
      setCartItems([]); 
    }
  };

  return (
    <div>
      <Helmet>
        <title>Dashboard | GadgetHeaven</title>
      </Helmet>
      <div className="relative">
        <Heading
          title="Dashboard"
          subtitle="Your central hub for tracking progress, managing tasks, and accessing insights. Stay organized and in control with real-time updates and personalized metrics"
        />

        <div className="absolute bottom-10 left-[480px]">
          <button onClick={() => setActiveTab("cart")} className="btn mr-4">
            Cart
          </button>
          <button onClick={() => setActiveTab("wishlist")} className="btn">
            Wishlist
          </button>
        </div>
      </div>

      {/* cart tab */}
      <div className="mt-10">
        {activeTab === "cart" && (
          <div>
            <div className="flex justify-between items-center my-6">
              <h2 className="text-xl font-bold mb-4">Cart Items</h2>
              <div className="flex gap-6 items-center">
                <h2 className="font-bold text-xl">
                  Total Cost: ${totalCartPrice}
                </h2>
                <button
                  onClick={sortCartByPrice}
                  className="btn border border-purple-500"
                >
                  Sort By Price
                </button>
                <button
                  onClick={handlePurchase}
                  disabled={cartItems.length === 0}
                  className="btn border border-purple-500"
                >
                  Purchase
                </button>
              </div>
            </div>

            {cartItems.map((item, index) => (
              <div
                key={index}
                className="border p-3 mb-2 rounded-lg flex gap-4 w-[70%] mx-auto"
              >
                <img
                  className="w-52 h-[110px] object-cover rounded-lg"
                  src={item.product_image}
                  alt=""
                />
                <div className="flex flex-col gap-3">
                  <h3 className="text-xl font-semibold">
                    {item.product_title}
                  </h3>
                  <p>{item.description}</p>
                  <p className="font-semibold">Price: ${item.price}</p>
                </div>
                <div className="flex items-center text-red-500 ml-auto cursor-pointer text-3xl">
                  <RiDeleteBack2Fill />
                </div>
              </div>
            ))}
          </div>
        )}

        {/* wishlist */}
        {activeTab === "wishlist" && (
          <div>
            <h2 className="text-xl font-bold mb-4">Wishlist Items</h2>
            {wishList.map((item, index) => (
              <div
                key={index}
                className="border p-3 mb-2 rounded-lg flex gap-4 w-[70%] mx-auto"
              >
                <img
                  className="w-52 h-[110px] object-cover rounded-lg"
                  src={item.product_image}
                  alt=""
                />
                <div className="flex flex-col gap-3">
                  <h3 className="text-xl font-semibold">
                    {item.product_title}
                  </h3>
                  <p>{item.description}</p>
                  <p className="font-semibold">Price: ${item.price}</p>
                </div>
                <div className="flex items-center text-red-500 ml-auto cursor-pointer text-3xl">
                  <RiDeleteBack2Fill />
                </div>
              </div>
            ))}
          </div>
        )}
      </div>

      {showModal && (
        <Modal total={purchaseTotal} onClose={() => setShowModal(false)} />
      )}
    </div>
  );
};

export default Dashboard;
