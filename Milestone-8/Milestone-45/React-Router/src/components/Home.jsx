import { Outlet, useLocation, useNavigation } from "react-router-dom";
import Header from "./Header";
import Footer from "./Footer";

const Home = () => {
  const navigation = useNavigation();
  const location = useLocation();
  console.log(location);
  return (
    <div>
      <Header></Header>
      <div className="text-center my-10 border-2 p-5">
        <h1 className="text-center mt-4 text-3xl font-bold">Home page</h1>
        <p>
          Discover breathtaking destinations and unforgettable adventures with
          us! From stunning beaches and vibrant cities to serene mountains and
          cultural gems, we bring you closer to the world’s wonders. Explore
          popular destinations, find exclusive travel packages, and get insider
          travel tips. Whether you're dreaming of a relaxing getaway or an
          action-packed adventure, our team of travel experts is here to make it
          happen.
        </p>
      </div>
      {navigation.state === "loading" ? (
        <p className="text-center font-bold  ">Loading...</p>
      ) : (
        <Outlet></Outlet>
      )}
      <Footer></Footer>
    </div>
  );
};

export default Home;
