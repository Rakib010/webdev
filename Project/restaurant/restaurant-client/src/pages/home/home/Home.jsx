import React from "react";
import Category from "../category/Category";
import Banner from "../banner/Banner";
import PopularMenu from "../popularMenu/PopularMenu";
import Featured from "../featured/Featured";
import Review from "../review/Review";
import { Helmet } from "react-helmet-async";

const Home = () => {
  return (
    <div>
      <Helmet>
        <title>Restaurant | Home</title>
      </Helmet>
      <Banner />
      <Category />
      <PopularMenu />
      <Featured />
      <Review />
    </div>
  );
};

export default Home;
