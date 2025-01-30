import { createBrowserRouter } from "react-router-dom";
import LogIn from "../components/LogIn";
import SingUp from "../components/SingUp";
import Root from "../layout/Root";
import Home from "../components/Home";
import Orders from "../components/Orders";
import PrivateRoute from "./PrivateRoute";
import Profile from "../components/Profile";

const routes = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "login",
        element: <LogIn />,
      },
      {
        path: "singup",
        element: <SingUp />,
      },
      {
        path: "orders",
        element: (
          <PrivateRoute>
            <Orders />
          </PrivateRoute>
        ),
      },
      {
        path: "profile",
        element: (
          <PrivateRoute>
            <Profile />
          </PrivateRoute>
        ),
      },
    ],
  },
]);

export default routes;
