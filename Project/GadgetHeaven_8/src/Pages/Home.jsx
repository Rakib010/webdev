import Hero from "../components/Hero";
import Categories from "../components/Categories";
import { Outlet } from "react-router-dom";
import { Helmet } from "react-helmet";

const Home = () => {
  return (
    <div>
      
      <Helmet>
        <title>Home | GadgetHeaven</title>
      </Helmet>

      <Hero />

      <div className="flex gap-4 mt-72">
        <Categories />
        <Outlet />
      </div>
    </div>
  );
};

export default Home;
