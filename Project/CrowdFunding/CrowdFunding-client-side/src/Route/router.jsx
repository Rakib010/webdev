import { createBrowserRouter } from "react-router-dom";
import Mainlayout from "../components/MainLayout/Mainlayout";
import Home from "../components/Home/Home";
import AddNewCampaign from "../components/AddNewCampaign/AddNewCampaign";
import AllCampaign from "../components/AllCampaign/AllCampaign";
import Login from "../components/Login/Login";
import Register from "../components/Register/Register";
import PrivateRoute from "../components/PrivateRoute/PrivateRoute";
import CampaignDetails from "../components/CampaignDetails/CampaignDetails";
import MyCampaign from "../components/MyCampaign/MyCampaign";
import MyDonations from "../components/MyDonations/MyDonations";
import ErrorPage from "../components/ErrorPage/ErrorPage";
import UpdateCampaign from "../components/updateCampaign/updateCampaign";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Mainlayout></Mainlayout>,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/addCampaign",
        element: (
          <PrivateRoute>
            <AddNewCampaign></AddNewCampaign>
          </PrivateRoute>
        ),
      },
      {
        path: "/allCampaign",
        element: <AllCampaign></AllCampaign>,
        loader: () =>
          fetch("https://crowd-funding-server-side.vercel.app/addCampaign"),
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
        path: "/campaign/:id",
        element: (
          <PrivateRoute>
            <CampaignDetails></CampaignDetails>
          </PrivateRoute>
        ),
        loader: ({ params }) =>
          fetch(
            `https://crowd-funding-server-side.vercel.app/campaign/${params.id}`
          ),
      },
      {
        path: "/myCampaign",
        element: (
          <PrivateRoute>
            <MyCampaign></MyCampaign>
          </PrivateRoute>
        ),
      },
      {
        path: "updatedCampaign/:id",
        element: <UpdateCampaign></UpdateCampaign>,
        loader: ({ params }) =>
          fetch(
            `https://crowd-funding-server-side.vercel.app/updatedCampaign/${params.id}`
          ),
      },
      {
        path: "/myDonations",
        element: (
          <PrivateRoute>
            <MyDonations></MyDonations>
          </PrivateRoute>
        ),
      },
    ],
  },
]);

export default router;
