import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { RouterProvider } from "react-router-dom";
import router from "./Routes/Routes";
import ProductsContext from "./contexts/ProductsContext";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <ProductsContext>
      <RouterProvider router={router} />
    </ProductsContext>
  </StrictMode>
);
