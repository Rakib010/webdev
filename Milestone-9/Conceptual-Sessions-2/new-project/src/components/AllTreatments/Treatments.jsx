import { useLoaderData } from "react-router-dom";
import ServiceCard from "../Home/ServiceCard";

const Treatments = () => {
  const data = useLoaderData();
  /* console.log(data); */
  return (
    <div>
      <div className="grid md:grid-cols-3 gap-5 mt-10">
        {/* slice kora hoyse bcz jeno home 4ta card display kore */}
        {data.map((service, i) => (
          <ServiceCard key={i} service={service}></ServiceCard>
        ))}
      </div>
    </div>
  );
};

export default Treatments;
