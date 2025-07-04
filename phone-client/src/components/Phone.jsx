import { Link, useLoaderData } from "react-router-dom";

const Phone = () => {
  const phones = useLoaderData();

  return (
    <div>
      All phone Here: {phones.length}
      {phones.map((phone) => (
        <li key={phone.id}>
          <Link to={`/phone/${phone.id}`}>{phone.name}</Link>
        </li>
      ))}
    </div>
  );
};

export default Phone;
