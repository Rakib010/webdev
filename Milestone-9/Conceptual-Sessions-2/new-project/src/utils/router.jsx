import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../components/MainLayout/MainLayout";
import Home from "../components/Home/Home";
import Treatments from "../components/AllTreatments/Treatments";
import Appointments from "../components/Appoinments/Appointments";
import Profile from "../components/Profile/Profile";
import Details from "../components/Details/Details";
import Login from "../components/Login/Login";
import Register from "../components/Register/Register";
import PrivateRoute from "../components/PrivateRoute/PrivateRoute";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout></MainLayout>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
        loader: async () => {
          const servicesRes = await fetch("/service.json");
          const servicesData = await servicesRes.json();

          const feedBackRes = await fetch("/happyclients.json");
          const feedBackData = await feedBackRes.json();

          return { servicesData, feedBackData };
        },
      },
      {
        path: "/treatments",
        element: <Treatments></Treatments>,
        loader: () => fetch("/service.json"),
      },
      {
        path: "/appointments",
        element: (
          <PrivateRoute>
            <Appointments></Appointments>
          </PrivateRoute>
        ),
      },
      {
        path: "/Profile",
        element: (
          <PrivateRoute>
            <Profile></Profile>
          </PrivateRoute>
        ),
      },
      {
        path: "/details/:id",
        element: (
          <PrivateRoute>
            <Details></Details>
          </PrivateRoute>
        ),
        /* when using json file  */
        loader: async ({ params }) => {
          const res = await fetch("/service.json");
          const data = await res.json();
          /*  console.log(data, params.id); */
          const singleData = data.find((da) => da.id == params.id);
          return singleData;
        },
      },
      {
        path: "/login",
        element: <Login></Login>,
      },
      {
        path: "/register",
        element: <Register></Register>,
      },
    ],
  },
]);
export default router;
