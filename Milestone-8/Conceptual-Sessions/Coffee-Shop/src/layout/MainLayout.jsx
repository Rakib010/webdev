import { Outlet } from "react-router-dom";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import { Toaster } from "react-hot-toast";

const MainLayout = () => {
  return (
    <div>
      <Toaster />
      <div className="h-16">
        {/* Navbar */}
        <Navbar></Navbar>
      </div>
      <div className="md:w-11/12 mx-auto">
        {/* Dynamic section */}
        <div className="min-h-[calc(100vh-232px)] py-10">
          <Outlet />
        </div>
      </div>

      {/* Footer */}
      <Footer></Footer>
    </div>
  );
};

export default MainLayout;
