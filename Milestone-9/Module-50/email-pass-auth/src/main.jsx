import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import Root from "./Layout/Root.jsx";
import Home from "./components/Home.jsx";

import { createBrowserRouter, RouterProvider } from "react-router-dom";
import LogIn from "./components/LogIn.jsx";
import Register from "./components/Register.jsx";
import RecapRegister from "./components/RecapRegister.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },

      {
        path: "login",
        element: <LogIn></LogIn>,
      },
      {
        path: "register",
        element: <Register></Register>,
      },
      {
        path: "RecapRegister",
        element: <RecapRegister></RecapRegister>,
      },
    ],
  },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
