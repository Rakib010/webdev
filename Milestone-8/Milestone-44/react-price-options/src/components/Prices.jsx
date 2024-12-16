/* eslint-disable no-unused-vars */
import Price from "./Price";
const Prices = () => {
  const priceoptions = [
    {
      id: 1,
      name: "Basic",
      price: "$29.99/month",
      features: [
        "Access to gym equipment",
        "Locker room access",
        "1 group class per month",
      ],
    },
    {
      id: 2,
      name: "Standard",
      price: "$49.99/month",
      features: [
        "Access to gym equipment",
        "Locker room access",
        "Unlimited group classes",
        "Access to cardio and strength training rooms",
      ],
    },
    {
      id: 3,
      name: "Premium",
      price: "$69.99/month",
      features: [
        "All Standard features",
        "1 personal training session per month",
        "Access to swimming pool",
        "Free guest pass (1 per month)",
      ],
    },
    {
      id: 4,
      name: "Elite",
      price: "$99.99/month",
      features: [
        "All Premium features",
        "Weekly personal training sessions",
        "Unlimited guest passes",
        "Access to VIP lounge and spa services",
        "Priority equipment reservation",
      ],
    },
    {
      id: 5,
      name: "Annual Membership",
      price: "$599/year",
      features: [
        "All Elite features",
        "Discount on all add-on services",
        "Free nutrition consultation",
        "Early access to new facilities and classes",
      ],
    },
  ];

  return (
    <div>
      <h2 className="text-2xl font-bold my-10 text-center">
        Best Price in the town
      </h2>
      <div className="w-10/12 mx-auto grid md:grid-cols-3 gap-4">
        {priceoptions.map((option) => (
          <Price key={option.id} option={option}></Price>
        ))}
      </div>
    </div>
  );
};

export default Prices;
