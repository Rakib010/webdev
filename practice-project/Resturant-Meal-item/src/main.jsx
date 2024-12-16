import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./index.css";
import MainHome from "./components/Main/MainHome";
import About from "./components/Navbar/About";
import Contact from "./components/Navbar/Contact";
import Categories from "./components/Categories/categories";
import CategoryDetails from "./components/Categories/CategoryDetails";
import Try from "./components/Categories/Try";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainHome></MainHome>,
    children: [
      {
        path: "/about",
        element: <About></About>,
      },
      {
        path: "/contact",
        element: <Contact></Contact>,
      },
      {
        path: "/categories",
        loader: async () => {
          const response = await fetch(
            "https://www.themealdb.com/api/json/v1/1/categories.php"
          );
          const data = await response.json();
          return data.categories;
        },
        element: <Categories />,
      },
      {
        path: "/categoriesDetails/:id",
        /*  loader: async ({params}) => {
          const response = await fetch(
            `https://www.themealdb.com/api/json/v1/1/filter.php?c=${params.id}`
          );
          const data = await response.json();
          return data.categories;
        }, */
        element: <CategoryDetails></CategoryDetails>,
      },
      {
        path: "/try:userId",
        loader: ({ params }) =>
          fetch(
            `https://www.themealdb.com/api/json/v1/1/filter.php?c=${params.userId}`
          ),
        element: <Try></Try>,
      },
    ],
  },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
