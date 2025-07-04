import { useLoaderData } from "react-router-dom";

const PhoneDetails = () => {
  const data = useLoaderData();
  console.log(data);
  return (
    <div>
      <h2>{data.name}</h2>
      <h2>{data.image}</h2>
    </div>
  );
};

export default PhoneDetails;
