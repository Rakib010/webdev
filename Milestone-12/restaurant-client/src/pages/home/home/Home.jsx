import React from "react";
import Category from "../category/Category";
import Banner from "../banner/Banner";
import PopularMenu from "../popularMenu/PopularMenu";
import Featured from "../featured/Featured";
import Review from "../review/Review";

const Home = () => {
  return (
    <div>
      <Banner />
      <Category />
      <PopularMenu />
      <Featured />
      <Review />
    </div>
  );
};

export default Home;
