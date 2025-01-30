import { CardElement, useElements, useStripe } from "@stripe/react-stripe-js";
import { useEffect, useState } from "react";
import useAxiosSecure from "./../../../hooks/useAxiosSecure";
import useCart from "./../../../hooks/useCart";
import useAuth from "../../../hooks/useAuth";
import { toast } from "react-hot-toast";
import { useNavigate } from "react-router-dom";

const CheckoutForm = () => {
  const [error, setError] = useState("");
  const [clientSecret, setClientSecret] = useState(""); // To store the client secret from Stripe
  const [transactionId, setTransactionId] = useState(); // To store the successful transaction ID
  const stripe = useStripe(); // Stripe instance for processing payments
  const elements = useElements(); // Access to Stripe elements (e.g., CardElement)
  const axiosSecure = useAxiosSecure();
  const { user } = useAuth();
  const [cart, refetch] = useCart();
  const navigate = useNavigate()
  const totalPrice = cart
    ?.reduce((total, item) => total + item.price, 0)
    .toFixed(2); // Calculate total price of cart items

  // Fetch client secret from the backend when the component mounts or totalPrice changes
  useEffect(() => {
    if (totalPrice > 0) {
      axiosSecure
        .post("/create-payment-intent", { price: totalPrice })
        .then((res) => {
          setClientSecret(res.data.clientSecret); // Save the client secret for later payment confirmation
        });
    }
  }, [axiosSecure, totalPrice]);

  // Handle form submission and payment processing
  const handleSubmit = async (event) => {
    event.preventDefault();

    // Ensure Stripe and Elements are loaded
    if (!stripe || !elements) return;

    const card = elements.getElement(CardElement); // Get CardElement data
    if (!card) return;

    // Create a payment method
    const { error, paymentMethod } = await stripe.createPaymentMethod({
      type: "card",
      card,
    });

    if (error) {
      setError(error.message); // Display error if payment method creation fails
      return;
    }
    setError(""); // Clear error message if successful

    // Confirm the payment using the client secret
    const { paymentIntent, error: confirmError } =
      await stripe.confirmCardPayment(clientSecret, {
        payment_method: {
          card: card,
          billing_details: {
<<<<<<< HEAD
            email: user?.email || "anonymous", 
            name: user?.displayName || "anonymous", 
=======
            email: user?.email || "anonymous", // Use authenticated user email if available
            name: user?.displayName || "anonymous", // Use authenticated user name if available
>>>>>>> 6798ab54149d5e1818931ac29cc8782967a95b81
          },
        },
      });

    if (confirmError) {
<<<<<<< HEAD
      setError(confirmError.message); 
    } else if (paymentIntent.status === "succeeded") {
      setTransactionId(paymentIntent.id); 
=======
      setError(confirmError.message); // Display error if payment confirmation fails
    } else if (paymentIntent.status === "succeeded") {
      setTransactionId(paymentIntent.id); // Save transaction ID for reference
>>>>>>> 6798ab54149d5e1818931ac29cc8782967a95b81

      // Prepare payment data for backend storage
      const payment = {
        email: user.email,
        price: totalPrice,
        transactionId: paymentIntent.id,
<<<<<<< HEAD
        date: new Date(), 
        cartIds: cart?.map((item) => item._id), 
        menuItemIds: cart?.map((item) => item.menuId), 
        status: "pending", 
=======
        date: new Date(), // Capture the current date
        cartIds: cart?.map((item) => item._id), // Map cart item IDs
        menuItemIds: cart?.map((item) => item.menuId), // Map menu item IDs
        status: "pending", // Set initial payment status
>>>>>>> 6798ab54149d5e1818931ac29cc8782967a95b81
      };

      // Save payment data to the backend
     const res =  await axiosSecure.post("/payments", payment);
      refetch();
      if (res.data.paymentResult?.insertedId) {
        toast.success("Payment successful");
      }
      navigate('/dashboard/PaymentHistory')
    }
  };

  return (
<<<<<<< HEAD
    <div className="flex justify-center items-center mt-20 bg-gray-100">
=======
    <div className="flex justify-center items-center min-h-screen bg-gray-100">
>>>>>>> 6798ab54149d5e1818931ac29cc8782967a95b81
      {/* Form container */}
      <div className="bg-white shadow-md rounded-lg p-8 max-w-lg w-full">
        <h2 className="text-2xl font-semibold text-gray-700 text-center mb-6">
          Complete Your Payment
        </h2>
        <form onSubmit={handleSubmit} className="space-y-6">
          {/* Card input field */}
          <div className="border border-gray-300 rounded-lg p-4">
            <CardElement
              options={{
                style: {
                  base: {
                    fontSize: "16px",
                    color: "#424770",
                    "::placeholder": {
                      color: "#aab7c4",
                    },
                  },
                  invalid: {
                    color: "#9e2146",
                  },
                },
              }}
            />
          </div>
          {/* Submit button */}
          <button
            type="submit"
            disabled={!stripe || !clientSecret} // Disable button if Stripe or client secret is not ready
            className="w-full py-3 bg-blue-500 text-white font-semibold rounded-md hover:bg-blue-600 transition-all disabled:opacity-50 disabled:cursor-not-allowed"
          >
            Pay ${totalPrice}
          </button>
          {/* Error message */}
          {error && <p className="text-red-600 text-center">{error}</p>}
          {/* Transaction success message */}
          {transactionId && (
            <p className="text-green-600 text-center">
              Payment Successful! Transaction ID: {transactionId}
            </p>
          )}
        </form>
      </div>
    </div>
  );
};

export default CheckoutForm;
