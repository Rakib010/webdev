import { createBrowserRouter } from "react-router-dom";
import Main from "../pages/Main";
import Home from "../components/Home";
import SingUp from "../components/Singup";
import Login from "../components/Login";

const route = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "signup",
        element: <SingUp></SingUp>,
      },
      {
        path: "login",
        element: <Login></Login>,
      },
    ],
  },
]);

export default route;
