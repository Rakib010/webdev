import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { RouterProvider } from "react-router-dom";
import route from "./Route/Route.jsx";
import DataProvider from "./contex/DataProvider.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <DataProvider>
      <RouterProvider router={route}>
        <App />
      </RouterProvider>
    </DataProvider>
  </StrictMode>
);
