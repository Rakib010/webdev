import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Root from "./components/Home/Root";
import ErrorPage from "./components/ErrorPage/ErrorPage";
import Dashboard from "./components/Books/Dashboard";
import HomePage from "./components/Home/HomePage";
import BookDetails from "./components/Books/BookDetails";
import ListedBook from "./components/Books/ListedBook";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { HelmetProvider } from "react-helmet-async";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      {
        path: "/",
        element: <HomePage></HomePage>,
      },
      {
        path: "books/:bookId",
        element: <BookDetails></BookDetails>,
        loader: ({ params }) => fetch("/booksData.json"),
      },
      {
        path: "listedBooks",
        element: <ListedBook></ListedBook>,
        loader: () => fetch("/booksData.json"),
      },
      {
        path: "dashboard",
        element: <Dashboard></Dashboard>,
      },
    ],
  },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <HelmetProvider>
      <RouterProvider router={router} />
      <ToastContainer />
    </HelmetProvider>
  </StrictMode>
);
