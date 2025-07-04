import useAuth from "../../../hooks/useAuth";
import useCart from "../../../hooks/useCart";
import useAxiosPublic from "../../../hooks/useAxiosPublic";

const SSLCommerceForm = () => {
  const axiosPublic = useAxiosPublic();
  const { user } = useAuth();
  const [cart, refetch] = useCart();
  const totalPrice = cart
    ?.reduce((total, item) => total + item.price, 0)
    .toFixed(2);

  // Prepare payment data for backend storage
  const payment = {
    email: user.email,
    price: totalPrice,
    transactionId: "",
    date: new Date(),
    cartIds: cart?.map((item) => item._id),
    menuItemIds: cart?.map((item) => item.menuId),
    status: "pending",
  };

  const handlePlaceOrder = async () => {
    try {
      const response = await axiosPublic.post("/create-ssl-payment", payment);
      if (response.data?.gatewayUrl) {
        window.location.replace(response.data.gatewayUrl);
      }
    } catch (error) {
      console.error("Payment initiation failed:", error);
    }
  };

  return (
    <div className="max-w-lg w-full mt-20 mx-auto p-10 bg-white shadow-md rounded-lg">
      <h2 className="text-2xl font-semibold text-center mb-4">
        SSL Commerce Payment
      </h2>
      <label
        htmlFor="email"
        className="block text-sm font-medium text-gray-700 mb-1"
      >
        Email
      </label>
      <input
        type="email"
        id="email"
        value={user?.email}
        className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
        placeholder="Enter your email"
      />
      <button
        onClick={handlePlaceOrder}
        className="w-full mt-4 bg-blue-600 text-white py-2 rounded-md hover:bg-blue-700 transition"
      >
        Place Order
      </button>
    </div>
  );
};

export default SSLCommerceForm;
