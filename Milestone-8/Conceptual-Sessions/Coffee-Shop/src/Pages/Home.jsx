import { Outlet, useLoaderData } from "react-router-dom";
import Banner from "../components/Banner";
import Heading from "../components/Heading";
import Categories from "../components/Categories";

const Home = () => {
  const categories = useLoaderData();

  return (
    <div>
      {/* Banner  */}
      <Banner></Banner>

      {/* Heading  */}
      <Heading
        title={"Browse Coffees by Category"}
        subtitle={
          "choose your desired coffee category to browse through specific coffees that fit in your taste."
        }
      ></Heading>

      {/* Categories tab section ( receive from useLoaderDate after pass data categories work to tab button) */}

      <Categories categories={categories} />

      {/* Dynamic Nested Component */}
      <Outlet/>
    </div>
  );
};

export default Home;
