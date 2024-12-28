import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../components/mainlayout/MainLayout";
import Home from "../components/Home/Home";
import Donation from "../components/donation-campaigns/donation";
import HowToHelp from "../components/how-to-help/HowToHelp";
import Dashboard from "../components/Dashboard/Dashboard";
import Login from "../components/login/Login";
import Details from "../components/donation-campaigns/Details";
import Register from "../components/Register/Register";
import PrivateRoute from "../components/PrivateRoute/PrivateRoute";
import ErrorMsg from "../components/error/ErrorMsg";
import ForgetPassword from "../components/login/ForgetPassword";
import DonationForm from "../components/donation-campaigns/DonationForm";
import ImpactStories from "../components/stories/ImpactStories";
import Volunteer from "../components/volunteer/volunteer";
import Footer from "../components/footer/Footer";
import VolunteerForm from "../components/volunteer/VolunteerForm";
import UpdateProfile from "../components/Dashboard/UpdateProfile";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout></MainLayout>,
    errorElement: <ErrorMsg></ErrorMsg>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/donationCampaigns",
        element: <Donation></Donation>,
        loader: async () => {
          const res = await fetch("/donation.json");
          const data = await res.json();
          return data;
        },
      },
      {
        path: "/details/:id",
        element: (
          <PrivateRoute>
            <Details></Details>
          </PrivateRoute>
        ),
        loader: async ({ params }) => {
          const res = await fetch("/donation.json");
          const data = await res.json();
          const item = data.find((i) => i.id == params.id);
          return item;
        },
      },
      {
        path: "/howToHelp",
        element: <HowToHelp></HowToHelp>,
      },
      {
        path: "/dashboard",
        element: (
          <PrivateRoute>
            <Dashboard></Dashboard>
          </PrivateRoute>
        ),
      },
      {
        path: "/login",
        element: <Login></Login>,
      },
      {
        path: "/register",
        element: <Register></Register>,
      },
      {
        path: "/forgetPassword",
        element: <ForgetPassword></ForgetPassword>,
      },
      {
        path: "/DonationForm",
        element: (
          <PrivateRoute>
            <DonationForm></DonationForm>
          </PrivateRoute>
        ),
      },
      {
        path: "/ImpactStories",
        element: <ImpactStories></ImpactStories>,
      },
      {
        path: "/volunteer",
        element: <Volunteer></Volunteer>,
      },
      {
        path: "/volunteerForm",
        element: <VolunteerForm></VolunteerForm>,
      },
      {
        path: "/footer",
        element: <Footer></Footer>,
      },
      {
        path: "updateProfile",
        element: (
          <PrivateRoute>
            <UpdateProfile></UpdateProfile>
          </PrivateRoute>
        ),
      },
    ],
  },
]);

export default router;
