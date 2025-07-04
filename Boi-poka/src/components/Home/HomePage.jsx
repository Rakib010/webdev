import Banner from "../Navbar/Banner";
import Books from "../Books/Books";
import { Helmet } from "react-helmet-async";

const HomePage = () => {
  return (
    <div>
      <Helmet>
        <title>Boi Poka | Home</title>
      </Helmet>
      <Banner></Banner>
      <Books></Books>
    </div>
  );
};

export default HomePage;
