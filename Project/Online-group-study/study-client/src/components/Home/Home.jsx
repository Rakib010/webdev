import Banner from "../banner/Banner";
import Features from "../banner/Features";
import Faq from "../Faq/Faq";

const Home = () => {
  return (
    <div className="w-11/12 mx-auto">
      <Banner />
      <Features />
      <Faq />
    </div>
  );
};

export default Home;
