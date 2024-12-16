import { Link, useLoaderData } from "react-router-dom";
import Banner from "./Banner";
import ServiceCard from "./ServiceCard";
import FeedBack from "./FeedBack";
const Home = () => {
  const data = useLoaderData();
  /* console.log(data);  */
  const { servicesData, feedBackData } = data;
  return (
    <div>
      <Banner></Banner>
      <div className="grid md:grid-cols-3 gap-5 mt-10">
        {/* slice kora hoyse bcz jeno home 4ta card display kore */}
        {servicesData.slice(0, 4).map((service, i) => (
          <ServiceCard key={i} service={service}></ServiceCard>
        ))}
      </div>
      <button className="btn btn-primary my-5 mx-auto block">
        <Link to="/Treatments">Show More</Link>
      </button>
      {/* Home show korbe but clean code er jonno another components show kora holo */}
      <FeedBack feedBackData={feedBackData}></FeedBack>
    </div>
  );
};

export default Home;
