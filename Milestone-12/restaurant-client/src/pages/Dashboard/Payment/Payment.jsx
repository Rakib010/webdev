import { useState } from "react";
import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import CheckoutForm from "./CheckoutForm";
import SSLCommerceForm from "./SSLCommerceForm ";


const stripePromise = loadStripe(import.meta.env.VITE_Payment_Gateway_PK);

const Payment = () => {
  const [paymentMethod, setPaymentMethod] = useState("stripe");

  return (
    <div className="p-6 rounded-lg">
      <h1 className="text-4xl font-semibold mb-8">Payment :</h1>
      <select
        className="select select-bordered w-1/3 "
        value={paymentMethod}
        onChange={(e) => setPaymentMethod(e.target.value)}
      >
        <option value="stripe">Stripe</option>
        <option value="ssl">SSL Commerce</option>
      </select>

      <div className="">
        {paymentMethod === "stripe" ? (
          <Elements stripe={stripePromise}>
            <CheckoutForm />
          </Elements>
        ) : (
          <SSLCommerceForm />
        )}
      </div>
    </div>
  );
};

export default Payment;
