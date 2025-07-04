import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Main from "./components/Main.jsx";
import Phone from "./components/Phone.jsx";
import PhoneDetails from "./components/PhoneDetails.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    children: [
      {
        path: "/phones",
        element: <Phone></Phone>,
        loader: () => fetch("http://localhost:3000/phones"),
      },
      {
        path: "/phone/:id",
        element: <PhoneDetails></PhoneDetails>,
        loader: ({params}) => fetch(`http://localhost:3000/phones/${params.id}`),
      },
    ],
  },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router}>
      <App />
    </RouterProvider>
  </StrictMode>
);
