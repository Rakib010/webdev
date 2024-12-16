import { Route } from "react-router-dom";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "../page/Home";
import About from "../page/About";
import Contact from "../page/Contact";
import Main from "../page/Main";

/* fetch data  */
const fetchData = async () => {
  const res = await fetch("/Data.json");
  const data = await res.json();
  return data;
};

const route = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,

    children: [
      {
        path: "/",
        element: <Home></Home>,
        /* loader: () => fetch("../Data.json"), */
        loader: fetchData,
        children: [
          {
            path: "/",
            element: (
              <h1 className="text-3xl font-bold border-violet-500 border p-4">
                Hello button 1
              </h1>
            ),
          },
          {
            path: "/button2",
            element: (
              <h1 className="text-3xl font-bold border-red-500 border p-4">
                Hello button 2
              </h1>
            ),
          },
        ],
      },
      {
        path: "/about",
        element: <About></About>,
      },
      {
        path: "/contact",
        element: <Contact></Contact>,
      },
    ],
  },
]);

export default route;
