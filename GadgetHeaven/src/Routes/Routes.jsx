import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../Layout/Mainlayout";
import Dashboard from "../Pages/Dashboard";
import Home from "../Pages/Home";
import Products from "../components/Products";
import Statistics from "../Pages/Statistics";
import ProductDetails from "../Pages/ProductDetails";
import ErrorMsg from "../Pages/ErrorMsg";
import Trending from "../Pages/Trending";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout></MainLayout>,
    errorElement: <ErrorMsg></ErrorMsg>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
        loader: () => fetch("../categories.json"),
        children: [
          {
            path: "/",
            element: <Products />,
            loader: () => fetch("../product.json"),
          },
          {
            path: "/category/:category",
            element: <Products />,
            loader: () => fetch("../product.json"),
          },
        ],
      },
      {
        path: "/product/:product_id",
        element: <ProductDetails></ProductDetails>,
        loader: () => fetch("../product.json"),
      },
      {
        path: "/statistics",
        element: <Statistics></Statistics>,
        loader: () => fetch("../product.json"),
      },
      {
        path: "/dashboard",
        element: <Dashboard></Dashboard>,
      },
      {
        path: "/trending",
        element: <Trending></Trending>,
        loader: () => fetch("../TrendingProduct.json"),
      },
    ],
  },
]);

export default router;
