import Slider from "../Banner/Slider";
import CategorySlider from "../ExtraSection/CategorySlider";
import OurImpact from "../ExtraSection/OurImpact";
import RunningCampaigns from "../RunningCampaign/RunningCampaign";

const Home = () => {
  return (
    <div>
      <Slider></Slider>
      <CategorySlider></CategorySlider>
      <RunningCampaigns></RunningCampaigns>
      <OurImpact></OurImpact>
    </div>
  );
};

export default Home;
