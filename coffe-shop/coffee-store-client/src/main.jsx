import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import {
  createBrowserRouter,
  RouterProvider,
  useParams,
} from "react-router-dom";
import AddCoffee from "./components/AddCoffee.jsx";
import UpdatedCoffee from "./components/UpdatedCoffee.jsx";
import AllCoffee from "./components/AllCoffee.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App></App>,
    children: [
      {
        path: "/",
        element: <AllCoffee></AllCoffee>,
        loader: () => fetch("http://localhost:3000/coffee"),
      },
      {
        path: "/addCoffee",
        element: <AddCoffee></AddCoffee>,
      },
      {
        path: "/updateCoffee/:id",
        element: <UpdatedCoffee></UpdatedCoffee>,
        loader: ({ params }) =>
          fetch(`http://localhost:3000/coffee/${params.id}`),
      },
    ],
  },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
