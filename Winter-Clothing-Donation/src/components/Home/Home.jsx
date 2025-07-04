import React from "react";
import Banner from "../banner/Banner";
import About from "../about/About";
import HowItWorks from "../how-it-works/HowItWorks";
import ImpactStories from "../stories/ImpactStories";
import Volunteer from "../volunteer/volunteer";


const Home = () => {
  return (
    <div>
      <Banner></Banner>
      <About></About>
      <HowItWorks></HowItWorks>
      <ImpactStories></ImpactStories>
      <Volunteer></Volunteer>
    </div>
  );
};

export default Home;
